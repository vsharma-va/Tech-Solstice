import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import {redirect} from "@sveltejs/kit";
import Razorpay from 'razorpay';
import {v4 as uuidv4} from 'uuid';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("Money");
const passes = database.collection("mo_passes");
const payments = database.collection("mo_payment_logs");

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET
})

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session) {
        throw redirect(302, "/passes?signedOut");
    }

    if (!event.params.payRefId) {
        throw redirect(302, "/passes?callbackFail");
    }
    console.log(event.params.payRefId)
    const foundPayment = await payments.findOne({
        reference_id: event.params.payRefId,
    })
    if (!foundPayment) {
        throw redirect(302, '/passes?callbackFailed');
    } else {
        console.log(foundPayment.razor_link_id)
        const razorpayObj = await razorpayInstance.paymentLink.fetch(foundPayment.razor_link_id);
        if (razorpayObj.status === "paid") {
            // check if pass and payment has already been updated?
            let checkPass = await passes.findOne({
                payment_id: razorpayObj.id,
                email: session.user.email,
                banned: false,
            })
            if (!checkPass) {
                await payments.updateOne({
                    reference_id: razorpayObj.reference_id,
                }, {$set: {status: razorpayObj.status}})
                let generatedTokenForPass;
                while (true) {
                    generatedTokenForPass = uuidv4().toString().slice(29, 35);
                    let foundToken = await passes.findOne({
                        token: generatedTokenForPass,
                    })
                    if (!foundToken) {
                        break;
                    }
                }
                console.log(generatedTokenForPass);
                console.log(razorpayObj.notes);
                await passes.insertOne({
                    email: session.user.email,
                    token: generatedTokenForPass,
                    pass_name: razorpayObj.notes.type,
                    payment_id: razorpayObj.id,
                    banned: false,
                });
                return {redirectUrl: process.env.ORIGIN + "/my-passes"}
            } else {
                return {redirectUrl: process.env.ORIGIN + "/passes"}
            }
        } else {
            return {redirectUrl: process.env.ORIGIN + "/passes", error: true, paymentStatus: razorpayObj.status}
        }
    }
}