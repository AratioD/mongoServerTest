// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'backEnd1';

// // Use connect method to connect to the server
// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server, yes");

//     const db = client.db(dbName);

//     client.close();
// });

var process = require("process")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/customer", { useNewUrlParser: true })

if (process.pid) {
    console.log('This process is your pid ' + process.pid);
}

mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", (error) => {
        console.log("my error", error)
    })

function exitProcess() {
    process.abort()

}

setTimeout(exitProcess, 3000);