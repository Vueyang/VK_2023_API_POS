const mongoose = require('mongoose');
//require('dotenv').config();
//const uri = process.env.MONDODB_CONNENT_URI;
//mongoose.Promise = global.Promise
//const uri = MONDODB_CONNENT_URI;

const connectDB= async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/product'); //ວີທີນີ້ແມ່ນໃຊ້ເຊື່ມຕໍ່ຈະຖາມຂໍ້ມູນໃນເຄືອງຂອງເຮົາ

        //await mongoose.connect(uri);
       console.log('Successfully connected DB');
    } catch (err) {
        console.log(err);
    }
    //await mongoose.connect(uri).then(() => console.log('Successfully connected DB')).catch((error)=> console.error(error));
}
//const connectDB = mongoose.connect(uri).then(() => console.log('Successfully connected DB')).catch((error)=> console.error(error));
module.exports = connectDB;
//mongoose.connect('mongodb://localhost:27017/test');