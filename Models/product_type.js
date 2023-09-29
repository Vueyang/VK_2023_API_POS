const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema({
    type_name: String,
    type_img: String,

}, {timestamps: true});
module.exports = mongoose.model('product_type', mongooseSchema);