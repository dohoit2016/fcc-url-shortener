var express = require("express");
var mongo = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var app = express();

app.get("/", function (req, res) {
    mongo.connect("mongodb://ngocdon:urlshortener@ds023912.mlab.com:23912/url", function (err, db) {
        var urls = db.collection("urls");
        urls.find({}).toArray(function (err, array) {
            console.log(array);
            res.json(array);
            res.end();
            db.close();
        })
    })
});

app.listen(process.env.PORT || 3000);