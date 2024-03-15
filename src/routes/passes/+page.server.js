import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {fail, redirect} from "@sveltejs/kit";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("Money");
const passes = database.collection("mo_passes");
const payments = database.collection("mo_payment_logs");
const userDatabase = client.db("User");
const user = userDatabase.collection("us_user_data");

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
        let userData = await user.findOne({
            email: session.user.email,
        }, {projection: {_id: 0}});
        // console.log(foundPayment);
        if (!foundPayment) {
            return {availablePasses: currentPasses, existingPayments: false, userData: userData};
        } else {
            return {
                availablePasses: currentPasses,
                existingPayments: true,
                existingPaymentsData: foundPayment,
                userData: userData
            };
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
    },
    registerUserAndProceed: async (event) => {
        const session = await event.locals.getSession();
        if (!session) {
            redirect(302, '/?signedOut');
        } else {
            let errors = {userNameError: '', userPhoneNumberError: ''};
            const formData = await event.request.formData();
            const userName = formData.get('userName');
            const userPhoneNumber = formData.get('userPhoneNumber');
            const redirectToken = formData.get('redirectToken');
            if (userName.length >= 2 && userName?.match(/^[A-Za-z\s]*$/) && userName !== 'undefined') {
                errors.userNameError = '';
            } else {
                errors.userNameError = 'Please enter a valid name';
            }
            if (userPhoneNumber.length !== 10 || userPhoneNumber.toString() === 'undefined') {
                errors.userPhoneNumberError = 'Please enter a valid phone number';
            }
            console.log(typeof redirectToken);
            if (errors.userNameError || errors.userPhoneNumberError) {
                return fail(400, errors);
            } else {
                let foundUser = await user.findOne({
                    email: session.user.email
                })
                if (!foundUser) {
                    await user.insertOne({
                        email: session.user.email,
                        user_name: userName,
                        userPhoneNumber: userPhoneNumber,
                    })
                    redirect(302, `/payment/${redirectToken}`);
                } else {
                    redirect(302, `/payment/${redirectToken}`);
                }
            }
        }
    }
}