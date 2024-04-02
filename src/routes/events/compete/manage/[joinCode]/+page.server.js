import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import {fail, redirect} from "@sveltejs/kit";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const userDatabase = client.db("User");
const registrations = userDatabase.collection('us_events_registrations');

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        redirect(302, "/events/compete?signedOut");
    }

    if (!event.params.joinCode) {
        redirect(302, '/events/compete?invalidToken');
    }
    const foundRegistration = await registrations.findOne({
        join_code: event.params.joinCode
    }, {projection: {_id: 0}})

    if (!foundRegistration) {
        redirect(302, '/events/compete?invalidToken');
    }

    if (foundRegistration.is_team === true) {
        if (foundRegistration.team_members.includes(session.user.email)) {
            if (foundRegistration.email === session.user.email) {
                return {registrationDetails: foundRegistration, isLeader: true};
            } else {
                return {registrationDetails: foundRegistration, isLeader: false};
            }
        } else {
            redirect(302, '/events/compete?invalidToken');
        }

    } else {
        redirect(302, '/events/compete?invalidToken');
    }
}

export const actions = {
    kickUser: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            redirect(302, '/events?signedOut');
        }

        const formData = await event.request.formData();
        let kickEmail = formData.get('emailToKick');
        let ownerEmail = formData.get('ownerEmail');
        let eventPriority = formData.get('eventPriority');
        let joinCode = formData.get('joinCode');

        if (kickEmail === 'undefined' || ownerEmail === 'undefined' || eventPriority === 'undefined' || joinCode === 'undefined') {
            return fail(400, {error: true, detail: "Messed With Client Side Values!"});
        }

        await registrations.updateOne({
            email: ownerEmail,
            event_priority: Number(eventPriority),
            join_code: joinCode
        }, {$pull: {team_members: kickEmail}, $inc: {team_member_count: -1}})

        return {success: true}
    },

    deleteTeam: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            redirect(302, '/events?signedOut');
        }

        const formData = await event.request.formData();
        let ownerEmail = formData.get('ownerEmail');
        let eventPriority = formData.get('eventPriority');
        let joinCode = formData.get('joinCode');
        if (ownerEmail === 'undefined' || eventPriority === 'undefined' || joinCode === 'undefined') {
            return fail(400, {error: true, detail: "Messed With Client Side Values!"});
        }

        await registrations.deleteOne({
            email: ownerEmail,
            event_priority: Number(eventPriority),
            join_code: joinCode,
        })
        redirect(302, '/events/compete');
    }
}