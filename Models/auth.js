const mongoose = require('mongoose');
const authScheme = mongoose.Schema({
    username: String,
    password: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('users', authScheme);