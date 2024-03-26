export const config = {
    runtime: 'edge'
}

import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import {redirect} from "@sveltejs/kit";
import {v4 as uuidv4} from "uuid";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("Money");
const passes = database.collection("mo_passes");
const payments = database.collection("mo_payment_logs");
const userDatabase = client.db("User");
const user = userDatabase.collection("us_user_data");

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        redirect(302, '/passes?signedOut');
    }
}
export const actions = {
    checkPaymentStatus: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            redirect(302, '/passes?signedOut');
        }
        const foundUser = await user.findOne({
            email: session.user.email,
        });
        if (!foundUser) {
            redirect(302, '/passes?invalidToken');
        }
        let resultPage = await fetchPaymentLogs(1);
        const totalPages = resultPage.data.totalPages;
        console.log(totalPages);

        console.log(foundUser.email);
        let paymentFlag = false;
        for (let pageNumber = 2; pageNumber <= totalPages; pageNumber++) {
            for (let doc of resultPage.data.docs) {
                if (doc.billing_tel === foundUser.userPhoneNumber) {
                    console.log("FOUND PAYMENT FOR", foundUser.email);
                    const foundPass = await passes.findOne({
                        email: foundUser.email,
                        pass_name: 'flagship__v2',
                        banned: false
                    });
                    if (!foundPass) {
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
                        if (!doc.esports) {
                            await passes.insertOne({
                                email: foundUser.email,
                                token: generatedTokenForPass,
                                pass_name: 'flagship__v2',
                                payment_id: doc.tracking_id,
                                banned: false,
                            })
                        } else {
                            let generatedTokenForEsports;
                            while (true) {
                                generatedTokenForEsports = uuidv4().toString().slice(29, 35);
                                let foundToken = await passes.findOne({
                                    token: generatedTokenForEsports,
                                })
                                if (!foundToken) {
                                    break;
                                }
                            }
                            await passes.insertMany([{
                                email: foundUser.email,
                                token: generatedTokenForEsports,
                                pass_name: 'esports__v2',
                                payment_id: doc.tracking_id,
                                banned: false,
                            }, {
                                email: foundUser.email,
                                token: generatedTokenForPass,
                                pass_name: 'flagship__v2',
                                payment_id: doc.tracking_id,
                                banned: false,
                            }]);
                        }
                    } else {
                        console.log("PAYMENT FOUND BUT PASS ALREADY GENERATED for: ", foundUser.email);
                    }
                    return {generatedPasses: true, passDetails: doc};
                }
            }
            resultPage = await fetchPaymentLogs(pageNumber);
        }
        return {generatedPasses: false};
    }
}

async function fetchPaymentLogs(pageNumber) {
    const apiUrl = "https://api.manipal.edu/api/v1/techsolstice-payment-logs";
    const fetchedResponse = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Connection": "keep-alive",
            "Access-Control-Allow-Origin": "*",
            "accesskey": process.env.MANIPAL_API_KEY,
            "accesstoken": process.env.MANIPAL_ACCESS_TOKEN,
        }
    });
    return await fetchedResponse.json();
}