const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = "mongodb://0.0.0.0:27017/mydb";


const mongoURL = process.env.MDB_URL;
mongoose.connect(mongoURL)
const db = mongoose.connection;
db.on('connected', () => {
    console.log("connected..");
});
db.on('error', (err) => {
    console.log("there is an error", err);
});
db.on('disconnected', () => {
    console.log("disconnected");
});

module.exports = db;