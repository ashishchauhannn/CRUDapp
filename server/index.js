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
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id },
        {
            fname: req.body.fname,
            lname: req.body.lname,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address
        })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
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
