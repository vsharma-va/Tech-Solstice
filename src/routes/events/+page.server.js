import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import {redirect} from "@sveltejs/kit";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const moneyDatabase = client.db("Money");
const passes = moneyDatabase.collection('mo_passes');
const userDatabase = client.db("User");
const registeredEvents = userDatabase.collection("us_events_registrations");

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (session) {
        let userEvents = await registeredEvents.find({
            email: session.user.email,
        }, {projection: {_id: 0}}).toArray();
        let userPasses = await passes.find({
            email: session.user.email,
            banned: false,
        }, {projection: {_id: 0}}).toArray();
        return {isRegisteredForAtLeastOne: true, data: userEvents, userPasses: userPasses};
    } else {
        return {isRegisteredForAtLeastOne: false, userPasses: []};
    }
}

export const actions = {
    registerEvent: async (event) => {
        const session = await event.locals.getSession();
        if (session) {
            const formData = await event.request.formData();
            const priority = formData.get('priority');
            console.log(priority);
            if (priority !== 'undefined') {
                const checkRegistration = await registeredEvents.findOne({
                    email: session.user.email,
                    event_priority: priority,
                });
                if (!checkRegistration) {
                    await registeredEvents.insertOne({
                        email: session.user.email,
                        event_priority: Number(priority),
                    });
                    redirect(302, '/events?registered');
                }
            }
        } else {
            redirect(302, '/events?signedOut');
        }
    }
}