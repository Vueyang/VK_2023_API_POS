const mongoose = require('mongoose');
const productShema = mongoose.Schema({
    pro_name: String,
    price : {
        type: Number,
        default: 0
    },
    amount : {
        type: Number,
        default: 0
    },
    detail : {
        type: String,
        required: true
    },
    image : {
        type: String,
        //required: true
    }
}, {timestamps: true});
module.exports = mongoose.model('Product', productShema);