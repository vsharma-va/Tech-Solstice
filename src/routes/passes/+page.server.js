import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("Money");
const passes = database.collection("mo_passes");
const payments = database.collection("mo_payment_logs");

const currentPasses = {
    flagship: {
        includes: ['Proshow', 'Standup', 'All Flagship Events'],
        excluded: ['Esports'],
        cost: 699,
        token: {
            includes: ['Proshow', 'Standup', 'All Flagship Events'],
            excluded: ['Esports'],
            cost: 699,
            dbName: 'flagship__v1',
            displayName: 'Flagship'
        },
        displayName: 'Flagship',
        dbName: 'flagship__v1'
    },
    esports: {
        includes: ['All Esports Events'],
        excluded: ['Proshow', 'Standup', 'All Flagship Events'],
        cost: 399,
        token: {
            includes: ['Proshow', 'Standup', 'All Flagship Events'],
            excluded: ['Esports'],
            cost: 399,
            dbName: 'esports__v1',
            displayName: 'Esports'
        },
        displayName: 'Esports',
        dbName: 'esports__v1'
    },
}
// replace token with jwt
for (let key in currentPasses) {
    currentPasses[key].token = jwt.sign(currentPasses[key].token, `${process.env.PASS_SIGN_KEY}`);
}

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        return {availablePasses: currentPasses, existingPayments: false};
    } else {
        let foundPayment = await payments.findOne({
            email: session.user.email,
            status: 'created',
        }, {projection: {_id: 0}})
        console.log(foundPayment);
        if (!foundPayment) {
            return {availablePasses: currentPasses, existingPayments: false};
        } else {
            return {availablePasses: currentPasses, existingPayments: true, existingPaymentsData: foundPayment};
        }
    }
}

export const actions = {
    cancelPayment: async (event) => {
        const session = await event.locals.getSession();
        console.log("CANCELLING");
        await payments.updateOne({
            email: session.user.email,
            status: 'created',
        }, {$set: {status: 'cancelled'}});
    }
}