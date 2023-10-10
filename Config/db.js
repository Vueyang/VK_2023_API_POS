const mongoose = require('mongoose');
//const uri = process.env.MONDODB_CONNENT_URI;
mongoose.Promise = global.Promise
const uri = "mongodb+srv://API_2023:BSF8i8RgODlsTzHA@cluster0.l1pwtjx.mongodb.net/?retryWrites=true&w=majority"

const connectDB= async () => {
    try {
        await mongoose.connect(uri); //ວີທີນີ້ແມ່ນໃຊ້ເຊື່ມຕໍ່ຈະຖາມຂໍ້ມູນໃນເຄືອງຂອງເຮົາ

        //await mongoose.connect(uri);
       console.log('Successfully connected DB');
    } catch (err) {
        console.log(err);
    }
    //mongoose.connect(uri).then(() => console.log('Successfully connected DB')).catch((error)=> console.error(error));
}

module.exports = connectDB;
//mongoose.connect('mongodb://localhost:27017/test');