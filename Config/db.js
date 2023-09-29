const mongoose = require('mongoose');

const connectDB= async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/product');
        console.log('Successfully connected DB');
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;
//mongoose.connect('mongodb://localhost:27017/test');