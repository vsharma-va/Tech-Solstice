import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
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
    if (!session?.user) {
        throw redirect(302, '/passes?signedOut');
    } else {

        if (!event.params.passToken) {
            throw redirect(302, '/passes?invalidPassToken')
        } else {
            try {
                let decodedToken = jwt.verify(event.params.passToken, process.env.PASS_SIGN_KEY);
                // check if pass of this type is already owned?
                let existingPass = await passes.findOne({
                    email: session.user.email,
                    pass_name: decodedToken.dbName,
                })
                if(existingPass) {
                    return {redirectUrl: '/my-passes?alreadyOwned'}
                }
                // check for any open payments
                let previousOpenPayment = await payments.findOne({
                    pass_name: decodedToken.dbName,
                    status: 'created',
                });
                // if previous open payments found then check their updated status
                if (previousOpenPayment) {
                    let razorpayFetched = await razorpayInstance.paymentLink.fetch(previousOpenPayment.razor_link_id);
                    if (razorpayFetched.status === 'created') {
                        return {
                            redirectUrl: razorpayFetched.short_url,
                        }
                    } else if (razorpayFetched.status === 'cancelled' || razorpayFetched.status === 'expired') {
                        // update the new status in the db and create a new payment link
                        await payments.updateOne({
                            reference_id: razorpayFetched.reference_id,
                        }, {$set: {status: razorpayFetched.status}})
                        let paymentReferenceId = uuidv4();
                        let razorpayLink = await generatePaymentLink(session, decodedToken.cost, decodedToken.dbName, paymentReferenceId);
                        await payments.updateOne({
                            reference_id: razorpayFetched.reference_id,
                        }, {
                            $set: {
                                status: razorpayFetched.status,
                                reference_id: paymentReferenceId,
                                pass_name: decodedToken.dbName,
                                razor_link_id: razorpayLink.id,
                                razor_short_url: razorpayLink.short_url
                            }
                        })
                        return {redirectUrl: razorpayLink.short_url};
                    } else if (razorpayFetched.status === 'paid') {
                        await payments.updateOne({
                            reference_id: razorpayFetched.reference_id,
                        }, {
                            $set: {status: razorpayFetched.status}
                        })

                        let generatedTokenForPass = uuidv4().toString().slice(29, 35);
                        await passes.insertOne({
                            email: session.user.email,
                            token: generatedTokenForPass,
                            pass_name: decodedToken.dbName,
                            payment_id: razorpayFetched.id,
                            banned: false,
                        })

                        return {redirectUrl: process.env.ORIGIN + "/my-passes"}
                    }
                } else {
                    const payRefId = uuidv4();
                    let generatedLink = await generatePaymentLink(session, decodedToken.cost, decodedToken.dbName, payRefId);
                    await payments.insertOne({
                        email: session.user.email,
                        reference_id: payRefId,
                        amount: decodedToken.cost,
                        status: generatedLink.status,
                        pass_name: decodedToken.dbName,
                        razor_link_id: generatedLink.id,
                        razor_short_url: generatedLink.short_url,
                    });
                    return {redirectUrl: generatedLink.short_url};
                }

            } catch (err) {
                throw redirect(302, '/passes?invalidPassToken');
            }
        }
    }
}

async function generatePaymentLink(session, passFees, passName, paymentReferenceId) {
    return await razorpayInstance.paymentLink.create({
        reference_id: paymentReferenceId,
        amount: passFees * 100,
        currency: 'INR',
        accept_partial: false,
        description: "Tech Solstice Pass",
        customer: {
            name: session.user.name || "", email: session.user.email || "", contact: "+910000000000",
        },
        notify: {
            email: true, sms: false,
        },
        reminder_enable: false,
        notes: {
            name: session.user.name || "", type: passName, session_email: session.user.email,
        },
        callback_url: process.env.ORIGIN + "/payment/callback/" + paymentReferenceId,
        callback_method: 'get'
    }).catch((error) => {
        console.log(error);
        throw redirect(302, "/?paymentGenerationError")
    })
}