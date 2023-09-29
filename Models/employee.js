const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    gender: {
        type: Number,
        //required: true
    },
    en_name: String,
    en_lastname: String,
    date_of_birth:{
        type: Date,
    },
    en_phone: String,
    en_email: String,
    village: String,
    district: String,
    province: String,
    position: String,
    en_image: String,
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);