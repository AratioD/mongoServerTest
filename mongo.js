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

const url = 'mongodb://localhost:27017/customer'

// create new devices collection and add some data into it
mongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, db) => {
    if (err) {
      console.log('ERROR:', err)
    } 
    else {
      console.log('CONNECTED: ', url)

    //   const demoDb = db.db('nodedemos')

    //   const collection = demoDb.collection('devices')

    //   const devArr = []

    //   devArr.push({"device":"Webcam","manufacturer":"Skalith","purchaseDate":"23.06.2011","price":39})
    //   devArr.push({"device":"Monitor","manufacturer":"Roodel","purchaseDate":"26.04.2011","price":32})
    //   devArr.push({"device":"Network card","manufacturer":"Twitterbeat","purchaseDate":"17.05.2014","price":10})
    //   devArr.push({"device":"Digital camera","manufacturer":"Trilith","purchaseDate":"29.12.2013","price":21})
    //   devArr.push({"device":"Sound Card","manufacturer":"Tagchat","purchaseDate":"14.07.2012","price":75})

    //   collection.insertMany(devArr, (err, result) => {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       console.log('Inserted %d documents with "_id" %s', result.length, result)
    //     }
        db.close()
    //   })
    }
  }
)



















//Process function abort, because it manual PID killing is boring
function exitProcess() {
    process.abort()
}

setTimeout(exitProcess, 3000);