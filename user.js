const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    joinAt: {
        type: Date,
        default: Date.now()
    },

});

const User = mongoose.model('User', userSchema, 'employe');

module.exports = User;
