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
// // });

// var process = require("process")
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/customer", { useNewUrlParser: true })

// if (process.pid) {
//     console.log('This process is your pid ' + process.pid);
// }

// mongoose.connection.once("open", () => console.log("Connected"))
// mongoose.connection.on("error", (error) => {
//     console.log("my error", error)
// })
// mongoose.connection.collection.

// mongoose.collection('customer').find().toArray(function (err, docs) {
//     console.log(JSON.stringify(docs));
// });
//const mongodb = require('mongodb')
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/users'

// create new devices collection and add some data into it
mongoClient.connect(url,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, db) => {
        if (err) {
            console.log('ERROR:', err)
        }
        else {
            console.log('CONNECTED: ', url)
            // var cursor = db.collection('firstName').find( );

            //console.log(db)
            const demoDb = db.db('users')
            const collection = demoDb.collection('name')

            temp = collection.find({}).toArray(function (err, items){});
            console.log(temp)
        }
    }
)


//Process function abort, because it manual PID killing is boring
function exitProcess() {
    process.abort()
}

setTimeout(exitProcess, 3000);