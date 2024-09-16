const express = require('express')///
const app = express()///
const cors = require('cors')
const db = require('./db');
const UserModel = require('./models/Users');

require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json())///

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})