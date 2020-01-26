const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'backEnd';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    { useNewUrlParser: true }
    console.log("Connected successfully to server, yes");

    const db = client.db(dbName);


    async function findOneListingByName(client, nameOfListing) {
        result = await client.db("backEnd").collection("namesCollec").findOne({ name: nameOfListing }
        );

        if (result) {
            console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
            console.log(result);
        } else {
            console.log(`No listings found with the name '${nameOfListing}'`);
        }
    }

    findOneListingByName(db, "Mikko")
    client.close();
});