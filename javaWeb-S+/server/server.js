const express = require("express");
const app = express();
let fs=require("fs");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(process.env.DB_URL, function (error, client) {
  if (error) {
    return console.log(error);
  }
  const db = client.db("txtData");
  app.locals.db = db; // Make db object accessible to other modules

  app.listen("8040", () => {
    console.log("실행완료");
  });
});
module.exports = chartRoutes;