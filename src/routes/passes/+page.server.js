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
        includes: ['All Events', 'Hackathon (MAHE)'],
        excluded: ['Esports'],
        cost: 749,
        token: {
            includes: ['All Events'],
            excluded: ['Esports, Hackathon'],
            cost: 749,
            dbName: 'flagship__v2',
            displayName: 'Flagship'
        },
        displayName: 'Flagship',
        dbName: 'flagship__v2'
    },
    esports: {
        includes: ['Esports'],
        excluded: ['Rest Of The Events'],
        cost: 99,
        token: {
            includes: ['Proshow', 'Standup', 'All Flagship Events'],
            excluded: ['Esports'],
            cost: 99,
            dbName: 'esports__v2',
            displayName: 'Esports'
        },
        displayName: 'Esports',
        dbName: 'esports__v2'
    },
    Hackathon: {
        includes: ['Hackathon', 'FOR NON MAHE ONLY'],
        excluded: ['Rest Of The Events'],
        cost: '353',
        token: {
            includes: ['Hackathon For NON MAHE'],
            excluded: ['Rest Of The Events'],
            cost: '353',
            dbName: 'hackathon__v1',
            displayName: 'Hackathon'
        },
        displayName: 'Hackathon',
        dbName: 'hackathon__v1'
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
        console.log(userData, session.user.email);
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
        if (!session?.user) {
            redirect(302, '/passes?signedOut');
        }
        console.log("CANCELLING");
        await payments.updateOne({
            email: session.user.email,
            status: 'created',
        }, {$set: {status: 'cancelled'}});
    },
    registerUserAndProceed: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            redirect(302, '/?signedOut');
        } else {
            let errors = {userNameError: '', userPhoneNumberError: '', userLearnerIdError: '', isMaheError: ''};
            const formData = await event.request.formData();
            const userName = formData.get('userName');
            const userPhoneNumber = formData.get('userPhoneNumber');
            const userLearnerId = formData.get('userLearnerId');
            const isMahe = formData.get('isMahe');
            const redirectToEvents = formData.get('redirectToEvents');
            const redirectToken = formData.get('redirectToken');
            if (userName.length >= 2 && userName?.match(/^[A-Za-z\s]*$/) && userName !== 'undefined') {
                errors.userNameError = '';
            } else {
                errors.userNameError = 'Please enter a valid name';
            }

            if (userPhoneNumber.length !== 10 || userPhoneNumber.toString() === 'undefined') {
                errors.userPhoneNumberError = 'Please enter a valid phone number';
            }
            let found = await user.findOne({
                userPhoneNumber: userPhoneNumber,
            })
            if (found) {
                errors.userPhoneNumberError = "Mobile Number Already Registered!";
            }

            if (isMahe === 'true') {
                if (!userLearnerId.includes('@learner.manipal.edu')) {
                    console.log("SOMETHING");
                    errors.userLearnerIdError = 'Please enter a valid learner id';
                }
            } else if (isMahe === 'undefined') {
                errors.isMaheError = 'Please select a valid option';
            }

            if (errors.userNameError || errors.userPhoneNumberError || errors.userLearnerIdError) {
                return fail(400, errors);
            } else {
                let foundUser = await user.findOne({
                    email: session.user.email
                })
                if (!foundUser) {
                    if(isMahe === 'false') {
                        await user.insertOne({
                            email: session.user.email,
                            user_name: userName,
                            userPhoneNumber: userPhoneNumber,
                            is_mahe: isMahe === 'true',
                        })
                    } else if (isMahe === 'true') {
                        await user.insertOne({
                            email: session.user.email,
                            user_name: userName,
                            userPhoneNumber: userPhoneNumber,
                            userLearnerId: userLearnerId,
                            is_mahe: isMahe === 'true',
                        })
                    }
                    if(redirectToEvents === 'true'){
                        redirect(302, '/events/compete')
                    } else {
                        redirect(302, '/payment/disclaimer');
                    }
                    // redirect(302, `/payment/${redirectToken}`);
                } else {
                    if(redirectToEvents === 'true') {
                        redirect(302, '/events/compete')
                    } else {
                        redirect(302, '/payment/disclaimer');
                    }
                    // redirect(302, `/payment/${redirectToken}`);
                }
            }
        }
    }
}