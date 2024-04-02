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
    resultPage.data.docs[10] = {
        "_id": "660c350722bfc65c6cfad9c7",
        "is_posted": 0,
        "tracking_id": "pay_Ntp53T8rTxxrrS",
        "order_status": "Success",
        "currency": "INR",
        "actual_amount": "749",
        "billing_name": "Sai Kushal KS",
        "billing_tel": "9860285402",
        "membership_type": "TechSolsticeNexus",
        "created_at": "2024-04-02",
        "orderid": "order_Ntp2jWApbLEquZ",
        "receiptno": "TSN5781",
        "total_amount": "749",
        "email": "sai4.mitblr2022@learner.manipal.edu",
        "user_type": "NONMAHE",
        "department": "CSE-AI",
        "registration_number": "225890272",
        "esports": true,
        "esports_amount": 0,
        "tech_solstice": true,
        "amount": 749,
        "cgst": 57.13,
        "base_price": 634.75
    }
    for (let doc of resultPage.data.docs) {
        if (doc.billing_tel === foundUser.userPhoneNumber) {
            paymentFlag = true;
            if (doc.user_type === 'NONMAHE') {
                let returnObject = {
                    esportsAlreadyExists: false,
                    esportsGenerated: false,
                    hackathonAlreadyExists: false,
                    hackathonGenerated: false
                };
                let generateHackathon = false;
                let generateEsports = false;
                const foundHackathonPass = await passes.findOne({
                    email: session.user.email,
                    pass_name: 'hackathon__v1',
                    banned: false,
                })
                const foundEsportsPass = await passes.findOne({
                    email: session.user.email,
                    pass_name: 'esports__v2',
                    banned: false,
                })
                if (doc.esports) {
                    generateEsports = true;
                }
                if (doc.tech_solstice) {
                    generateHackathon = true;
                }

                if (generateEsports) {
                    if (!foundEsportsPass) {
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
                        await passes.insertOne({
                            email: foundUser.email,
                            token: generatedTokenForPass,
                            pass_name: "esports__v2",
                            payment_id: doc.tracking_id,
                            banned: false,
                        })
                        returnObject.esportsGenerated = true;
                        returnObject.esportsAlreadyExists = false;
                    } else {
                        returnObject.esportsGenerated = false;
                        returnObject.esportsAlreadyExists = true;
                    }
                }

                if (generateHackathon) {
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
                        await passes.insertOne({
                            email: foundUser.email,
                            token: generatedTokenForPass,
                            pass_name: "hackathon__v1",
                            payment_id: doc.tracking_id,
                            banned: false,
                        })
                        returnObject.hackathonGenerated = true;
                        returnObject.hackathonAlreadyExists = false;
                    } else {
                        returnObject.hackathonGenerated = false;
                        returnObject.hackathonAlreadyExists = true;
                    }
                }
                returnObject.generatedPasses = true;
                returnObject.userType = "NONMAHE";
                return json(returnObject);
            }

            if (doc.user_type === 'MAHE') {
                let returnObject = {
                    esportsAlreadyExists: false,
                    esportsGenerated: false,
                    flagshipAlreadyExists: false,
                    flagshipGenerated: false
                };
                let generateFlagship = false;
                let generateEsports = false;
                const foundFlagshipPass = await passes.findOne({
                    email: session.user.email,
                    pass_name: 'flagship__v2',
                    banned: false,
                })
                const foundEsportsPass = await passes.findOne({
                    email: session.user.email,
                    pass_name: 'esports__v2',
                    banned: false,
                })
                if (doc.esports) {
                    generateEsports = true;
                }
                if (doc.tech_solstice) {
                    generateFlagship = true;
                }

                if (generateEsports) {
                    if (!foundEsportsPass) {
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
                        await passes.insertOne({
                            email: foundUser.email,
                            token: generatedTokenForPass,
                            pass_name: "esports__v2",
                            payment_id: doc.tracking_id,
                            banned: false,
                        })
                        returnObject.esportsGenerated = true;
                        returnObject.esportsAlreadyExists = false;
                    } else {
                        returnObject.esportsGenerated = false;
                        returnObject.esportsAlreadyExists = true;
                    }
                }

                if (generateFlagship) {
                    if (!foundFlagshipPass) {
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
                        await passes.insertOne({
                            email: foundUser.email,
                            token: generatedTokenForPass,
                            pass_name: "flagship__v2",
                            payment_id: doc.tracking_id,
                            banned: false,
                        })
                        returnObject.flagshipGenerated = true;
                        returnObject.flagshipAlreadyExists = false;
                    } else {
                        returnObject.flagshipGenerated = false;
                        returnObject.flagshipAlreadyExists = true;
                    }
                }
                returnObject.generatedPasses = true;
                returnObject.userType = "MAHE";
                return json(returnObject);
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