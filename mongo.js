// //const mongodb = require('mongodb')
// const mongoClient = require('mongodb').MongoClient

// const url = 'mongodb://localhost:27017/demos'

// // create new devices collection and add some data into it
// mongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
//   (err, db) => {
//     if (err) {
//       console.log('ERROR:', err)
//     } 
//     else {
//       console.log('CONNECTED: ', url)

//       const demoDb = db.db('nodedemos')

//       const collection = demoDb.collection('devices')

//       const devArr = []

//       devArr.push({"device":"Webcam","manufacturer":"Skalith","purchaseDate":"23.06.2011","price":39})
//       devArr.push({"device":"Monitor","manufacturer":"Roodel","purchaseDate":"26.04.2011","price":32})
//       devArr.push({"device":"Network card","manufacturer":"Twitterbeat","purchaseDate":"17.05.2014","price":10})
//       devArr.push({"device":"Digital camera","manufacturer":"Trilith","purchaseDate":"29.12.2013","price":21})
//       devArr.push({"device":"Sound Card","manufacturer":"Tagchat","purchaseDate":"14.07.2012","price":75})

//       collection.insertMany(devArr, (err, result) => {
//         if (err) {
//           console.log(err)
//         } else {
//           console.log('Inserted %d documents with "_id" %s', result.length, result)
//         }
//         db.close()
//       })
//     }
//   }
// )
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/users";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("users");


    var myobj = { name: "Juu Company Inc", address: "Apple street 10" };
    var myobj1 = { name: "SX SW development Inc", address: "Pizza street" };

    dbo.collection("firstName").insertMany([myobj1, myobj], function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });


    dbo.collection("firstName").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
//Process function abort, because it manual PID killing is boring
// function exitProcess() {
//     process.abort()
// }

// setTimeout(exitProcess, 5000);