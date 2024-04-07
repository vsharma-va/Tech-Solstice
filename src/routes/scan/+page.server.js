import {fail, redirect} from "@sveltejs/kit";
import {MongoClient} from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
const moneyDatabase = client.db("Money");
const passes = moneyDatabase.collection("mo_passes");
const userDatabase = client.db("User");
const permissions = userDatabase.collection("us_scan_permission");
const markings = userDatabase.collection("us_markings");

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        redirect(302, '/?signedOut');
    }

    let foundPermissions = await permissions.findOne({email: session.user.email}, {projection: {_id: 0}});
    if (!foundPermissions) {
        redirect(302, '/?unauthorised');
    }

    let contentStrapiUrl = "https://content.mitblrfest.in"
    let strapiKey = "298b35a62cad6355f0bfa06ffd7ae42c739c87fe0e3bc2ba4978116cbed29991873264fecca48f2cb119c07bfb70b6121b25f8aedc2b7da56fac282793f34e97ddb672a2a4396fc8c9b37e9b752840ad215149c57ad151092c5b34b8f1f95840ad124ef3092509c1b1cbd75dceef1adf9234e772194b7539d63ff26062acd8a8";
    let allowedEvents = [];

    if (foundPermissions.permission === "ALLACCESS") {
        allowedEvents = (await (await fetch(`${contentStrapiUrl}/api/events`, {
            headers: {Authorization: `Bearer ${strapiKey}`}
        })).json()).data;
    } else {
        let eventPriorities = foundPermissions.permission.split(",");
        for (let priority of eventPriorities) {
            let temp = (await (await fetch(`${contentStrapiUrl}/api/events?filters[EventPriority][$eq]=${priority}`, {
                headers: {Authorization: `Bearer ${strapiKey}`}
            })).json()).data;
            allowedEvents.push(temp[0]);
        }
    }

    return {permission: allowedEvents};
}

export const actions = {
    markAttendance: async (event) => {
        const session = await event.locals.getSession()
        if (!session?.user) {
            redirect(302, '/?signedOut');
        }

        const formData = await event.request.formData();
        const selectedEventPriority = formData.get("selectedEventPriority");
        const passId = formData.get("passId");
        const eventName = formData.get("eventName");
        const isMahe = formData.get("isMahe");
        console.log(isMahe);
        console.log(typeof isMahe);

        if (Number(selectedEventPriority) > 1000 && Number(selectedEventPriority) <= 2000 && isMahe === 'true') {
            const foundFlagship = await passes.findOne({
                token: passId,
                pass_name: 'flagship__v2'
            })
            if (foundFlagship) {
                const previousMarking = await markings.findOne({
                    email: foundFlagship.email,
                    event_priority: Number(selectedEventPriority),
                    event_name: eventName,
                });
                if (!previousMarking) {
                    await markings.insertOne({
                        email: foundFlagship.email,
                        event_priority: Number(selectedEventPriority),
                        event_name: eventName,
                    })
                    return fail(400, {success: true, detail: "User Marked Successfully"})
                } else {
                    return fail(400, {error: true, detail: "User Already Marked"})
                }
            } else {
                return fail(400, {error: true, detail: "Pass ID is Wrong"})
            }
        } else if (Number(selectedEventPriority) > 2000) {
            const foundEsports = await passes.findOne({
                token: passId,
                pass_name: 'esports__v2'
            })
            if (foundEsports) {
                const previousMarking = await markings.findOne({
                    email: foundEsports.email,
                    event_priority: Number(selectedEventPriority),
                    event_name: eventName,
                });
                if (!previousMarking) {
                    await markings.insertOne({
                        email: foundEsports.email,
                        event_priority: Number(selectedEventPriority),
                        event_name: eventName,
                    })
                    return fail(400, {success: true, detail: "User Marked Successfully"})

                } else {
                    return fail(400, {error: true, detail: "User Already Marked"})
                }
            } else {
                return fail(400, {error: true, detail: "Pass ID is Wrong"})
            }
        } else if (Number(selectedEventPriority) === 1001 && isMahe === 'false') {
            const foundHackathon = await passes.findOne({
                token: passId,
                pass_name: 'hackathon__v1'
            })
            if (foundHackathon) {
                const previousMarking = await markings.findOne({
                    email: foundHackathon.email,
                    event_priority: Number(selectedEventPriority),
                    event_name: eventName,
                });
                if (!previousMarking) {
                    await markings.insertOne({
                        email: foundHackathon.email,
                        event_priority: Number(selectedEventPriority),
                        event_name: eventName,
                    })
                    return fail(400, {success: true, detail: "User Marked Successfully"})

                } else {
                    return fail(400, {error: true, detail: "User Already Marked"})
                }
            } else {
                return fail(400, {error: true, detail: "Pass ID is Wrong"})
            }
        } else if (Number(selectedEventPriority) === 1 || Number(selectedEventPriority) === 2 || Number(selectedEventPriority) === 3) {
            console.log("FOUND")
            const foundFlagship = await passes.findOne({
                token: passId,
                pass_name: 'flagship__v2'
            })
            console.log(foundFlagship);
            if (foundFlagship) {
                console.log(Number(selectedEventPriority));
                const previousMarking = await markings.findOne({
                    email: foundFlagship.email,
                    event_priority: Number(selectedEventPriority),
                });
                console.log(previousMarking)
                if (!previousMarking) {
                    await markings.insertOne({
                        email: foundFlagship.email,
                        event_priority: Number(selectedEventPriority),
                        event_name: eventName,
                    })
                    return fail(400, {success: true, detail: "User Marked Successfully"})
                } else {
                    return fail(400, {error: true, detail: "User Already Marked"})
                }
            } else {
                return fail(400, {error: true, detail: "Pass ID is Wrong"})
            }
        }
    }
}

