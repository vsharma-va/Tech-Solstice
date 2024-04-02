import {fail, redirect} from "@sveltejs/kit";
import {MongoClient} from "mongodb";
import {v4 as uuidv4} from "uuid";

const client = new MongoClient(process.env.MONGO_URL);
const moneyDatabase = client.db("Money");
const passes = moneyDatabase.collection("mo_passes");
const userDatabase = client.db("User");
const users = userDatabase.collection("us_user_data");
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
    console.log("teamMember");
    console.log(totalRegistrations.teamMember);
    console.log("teamorsolo");
    console.log(totalRegistrations.teamOrSolo);
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

            let foundUser = await users.findOne({
                email: session.user.email
            })
            if (!foundUser) {
                return fail(400, {error: true, detail: "User Not Registered"});
            }

            let hasRequiredPass = false;
            if ("is_mahe" in foundUser && foundUser.is_mahe === false) {
                if (Number(selectedEventPriority) === 1001) {
                    let passFound = await passes.findOne({
                        email: session.user.email,
                        pass_name: 'hackathon__v1',
                        banned: false
                    });
                    if (passFound) {
                        hasRequiredPass = true;
                    }
                } else if (Number(selectedEventPriority) > 2000) {
                    let passFound = await passes.findOne({
                        email: session.user.email,
                        pass_name: 'esports__v2',
                        banned: false
                    });
                    if (passFound) {
                        hasRequiredPass = true;
                    }
                } else if (Number(selectedEventPriority) > 1001 && Number(selectedEventPriority) <= 2000) {
                    hasRequiredPass = true;
                }
                // fucked up due to last moment changes
            } else if ("is_mahe" in foundUser && foundUser.is_mahe === true || !("is_mahe" in foundUser)) {
                // check for hackathon (non mahe), esports and normal flagship events
                if (Number(selectedEventPriority) >= 1001 && Number(selectedEventPriority) <= 2000) {
                    let passFound = await passes.findOne({
                        email: session.user.email,
                        pass_name: "flagship__v2",
                        banned: false
                    });
                    if (passFound) {
                        hasRequiredPass = true;
                    }
                }
                if (Number(selectedEventPriority) > 2000) {
                    let passFound = await passes.findOne({
                        email: session.user.email,
                        pass_name: "esports__v2",
                        banned: false
                    });
                    if (passFound) {
                        hasRequiredPass = true;
                    }
                }
            }

            if (hasRequiredPass) {
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
                        let generatedToken;
                        while (true) {
                            generatedToken = uuidv4().toString().slice(29, 35);
                            let foundToken = await registrations.findOne({
                                join_code: generatedToken,
                            })
                            if (!foundToken) {
                                break;
                            }
                        }
                        await registrations.insertOne({
                            email: session.user.email,
                            event_name: eventName,
                            is_team: true,
                            team_member_count: 1,
                            team_name: teamName,
                            join_code: generatedToken,
                            max_team_members: Number(maxTeamMembers),
                            team_members: [session.user.email],
                            event_priority: Number(selectedEventPriority),
                        })
                        return {success: true}
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
                        return {success: true}
                    } else {
                        return fail(400, {error: true, detail: 'User Already Registered'})
                    }
                }
            } else {
                return fail(400, {error: true, detail: 'Please Buy The Required Pass!'});
            }
        }
    },
    registerExistingEvent: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            redirect(302, '/event/compete?signedOut');
        }

        let errors = {joinCodeError: ''};
        const formData = await event.request.formData();
        let joinCode = formData.get('teamJoinCode');

        if (!joinCode) {
            errors.joinCodeError = 'Invalid Join Code';
        }

        if (errors.joinCodeError) {
            return fail(302, {errorExisting: true, details: errors.joinCodeError})
        }
        let foundEvent = await registrations.findOne({
            join_code: joinCode,
        });
        if (!foundEvent) {
            return fail(400, {errorExisting: true, details: 'Invalid Join Code'});
        }

        if (foundEvent.email === session.user.email || foundEvent.team_members.includes(session.user.email)) {
            return fail(400, {errorExisting: true, details: 'Already A Member!'})
        }

        let foundUser = await users.findOne({
            email: session.user.email
        })
        if (!foundUser) {
            return fail(400, {errorExisting: true, details: "User Not Registered"});
        }

        let hasRequiredPass = false;
        if ("is_mahe" in foundUser && foundUser.is_mahe === false) {
            if (foundEvent.event_priority === 1001) {
                let passFound = await passes.findOne({
                    email: session.user.email,
                    pass_name: 'hackathon__v1',
                    banned: false
                });
                if (passFound) {
                    hasRequiredPass = true;
                }
            } else if (foundEvent.event_priority > 2000) {
                let passFound = await passes.findOne({
                    email: session.user.email,
                    pass_name: 'esports__v2',
                    banned: false
                });
                if (passFound) {
                    hasRequiredPass = true;
                }
            } else if (foundEvent.event_priority > 1001 && foundEvent.event_priority <= 2000) {
                hasRequiredPass = true;
            }
            // fucked up due to last moment changes
        } else if ("is_mahe" in foundUser && foundUser.is_mahe === true || !("is_mahe" in foundUser)) {
            // check for hackathon (non mahe), esports and normal flagship events
            if (foundEvent.event_priority >= 1001 && foundEvent.event_priority <= 2000) {
                let passFound = await passes.findOne({
                    email: session.user.email,
                    pass_name: "flagship__v2",
                    banned: false
                });
                if (passFound) {
                    hasRequiredPass = true;
                }
            }
            if (foundEvent.event_priority > 2000) {
                let passFound = await passes.findOne({
                    email: session.user.email,
                    pass_name: "esports__v2",
                    banned: false
                });
                if (passFound) {
                    hasRequiredPass = true;
                }
            }
        }

        if (hasRequiredPass) {
            if (foundEvent.max_team_members > foundEvent.team_member_count) {
                await registrations.updateOne({
                    join_code: joinCode,
                }, {
                    $push: {'team_members': session.user.email},
                    $inc: {'team_member_count': 1},
                })
                return {success: true}
            } else {
                return fail(400, {errorExisting: true, details: 'Team Full'})
            }
        } else {
            return fail(400, {errorExisting: true, details: 'Please Buy The Required Pass!'})
        }
    }
}