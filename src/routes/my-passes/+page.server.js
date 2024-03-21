import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';
import {redirect} from "@sveltejs/kit";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db("Money");
const passes = database.collection("mo_passes");

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        throw redirect(302, '/passes?signedOut');
    } else {
        console.log('email->log: ', session.user.email);
        let dbPasses = await passes.find({
            email: session.user.email,
            banned: false,
        }, {projection: {_id: 0}}).toArray();
        console.log('ownedpasses->log: ', dbPasses);
        return {ownedPasses: dbPasses};
    }
}