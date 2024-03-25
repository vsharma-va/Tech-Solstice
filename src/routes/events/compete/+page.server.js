import {fail, redirect} from "@sveltejs/kit";
import {MongoClient} from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
const userDatabase = client.db("User");
const registrations = userDatabase.collection('us_events_registrations');

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        redirect(302, '/events?signedOut');
    }

    let foundRegistrationsWhereOwnerOrSolo = await registrations.find({
        email: session.user.email,
    }, {projection: {_id: 0}}).toArray();
    let foundRegistrationsWhereNotOwner = await registrations.find({
        team_members: session.user.email,
        email: {$ne: session.user.email},
    }, {projection: {_id: 0}}).toArray();

    let totalRegistrations = {
        teamOrSolo: foundRegistrationsWhereOwnerOrSolo,
        teamMember: foundRegistrationsWhereNotOwner
    };
    return {registrations: totalRegistrations};
}

export const actions = {
    registerForEvent: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            redirect(302, '/?signedOut')
        } else {
            let errors = {selectedEventError: '', teamNameError: ''};
            const formData = await event.request.formData();
            const selectedEventPriority = formData.get('selectedEventPriority');
            const isTeam = formData.get('isTeam');
            const teamName = formData.get('teamName');
            const maxTeamMembers = formData.get('maxTeamLength');
            const eventName = formData.get('eventName');
            console.log(selectedEventPriority, isTeam, teamName);
            if (selectedEventPriority.toString() === 'undefined') {
                errors.selectedEventError = 'Select a valid event';
            }
            if (isTeam === 'true') {
                if (teamName === 'undefined') {
                    errors.teamNameError = 'Enter a valid team name';
                }
            }

            if (errors.selectedEventError || errors.teamNameError) {
                return fail(400, errors);
            }

            if (isTeam === 'true') {
                let reg = await registrations.findOne({
                    email: session.user.email,
                    event_priority: Number(selectedEventPriority)
                });
                let member = await registrations.findOne({
                    is_team: true,
                    team_member: session.user.email
                });
                if (!reg && !member) {
                    await registrations.insertOne({
                        email: session.user.email,
                        event_name: eventName,
                        is_team: true,
                        team_member_count: 1,
                        team_name: teamName,
                        max_team_members: Number(maxTeamMembers),
                        team_members: [session.user.email],
                        event_priority: Number(selectedEventPriority),
                    })
                } else {
                    return fail(400, {error: true, detail: 'User Already Registered'});
                }
            } else {
                let reg = await registrations.findOne({
                    email: session.user.email,
                    is_team: false,
                    event_priority: Number(selectedEventPriority),
                })
                if (!reg) {
                    await registrations.insertOne({
                        email: session.user.email,
                        event_name: eventName,
                        is_team: false,
                        event_priority: Number(selectedEventPriority),
                    })
                } else {
                    return fail(400, {error: true, detail: 'User Already Registered'})
                }
            }
        }
    }
}