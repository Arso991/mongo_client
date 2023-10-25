let {client, getMongoClient, getClient} = require("../database")

 /* async function collection(name){
    mongoClient = await getMongoClient();
    const db = mongoClient.db("geographydb");
    return await db.collection(name);
} */

getMongoClient();

const DB = {
    collection: (name) => {
        const db = getClient().db("geographydb");
        return db.collection(name);
    }
}

    

module.exports = DB;