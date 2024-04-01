import {json, redirect} from "@sveltejs/kit";
import {MongoClient} from "mongodb";
import {v4 as uuidv4} from "uuid";
import * as dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("Money");
const passes = database.collection("mo_passes");
const payments = database.collection("mo_payment_logs");
const userDatabase = client.db("User");
const user = userDatabase.collection("us_user_data");

export async function POST(event) {
    const jsonData = await event.request.json();
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
    let pageNumber = jsonData.currentPageNumber;
    let resultPage = await fetchPaymentLogs(pageNumber);
    const totalPages = resultPage.data.totalPages;
    let paymentFlag = false;
    for (let doc of resultPage.data.docs) {
        if (doc.billing_tel === foundUser.userPhoneNumber) {
            paymentFlag = true;
            if (doc.user_type === 'NONMAHE') {
                const foundHackathonPass = passes.findOne({
                    email: session.user.email,
                    pass_name: 'hackathon__v1',
                    banned: false,
                })
                if (!foundHackathonPass) {
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
                            pass_name: 'hackathon__v1',
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
                            pass_name: 'hackathon__v1',
                            payment_id: doc.tracking_id,
                            banned: false,
                        }]);
                    }
                } else {
                    return json({generatedPasses: true, semi: true})
                }
                return json({generatedPasses: true, semi: false, passDetails: doc});
            }

            if (doc.user_type === 'MAHE') {
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
                    return json({generatedPasses: true, semi: true})
                }
                return json({generatedPasses: true, semi: false, passDetails: doc});
            }
        }
    }
    return json({generatedPasses: false, totalPages: totalPages, currentPageNumber: Number(pageNumber)});
}

async function fetchPaymentLogs(pageNumber) {
    const apiUrl = `https://api.manipal.edu/api/v1/techsolstice-payment-logs/?page=${pageNumber}`;
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