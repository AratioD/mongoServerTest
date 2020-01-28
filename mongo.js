
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/backEnd";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("backEnd");

    var myobj = { name: "Juu Company Inc", address: "Apple street 10" };
    var myobj1 = { name: "SX SW development Inc", address: "Pizza street" };

    dbo.collection("firstName").insertMany([myobj1, myobj], function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

    dbo.collection("backEnd").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
