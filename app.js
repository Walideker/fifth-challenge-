const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('./user')

mongoose.connect('mongodb://127.0.0.1:27017/bikiniDb');
const db = mongoose.connection;
db.once('open', () => { console.log('Connected to MongoDB database: bikiniDb'); });
db.on('disconnected', () => { console.log('MongoDB disconnected'); });


run()
async function run() {
    // read op
    const existingUser = await User.findOne({ name: 'ali' })
    if (existingUser) {
        console.log('this user aleary created');
    }
    else {
        // create op 
        const user = await User.create({
            name: 'ali',
            salary:200,
            joinAt:Date.now()
        })
        console.log(user)
    }
}
app.listen(3000)


