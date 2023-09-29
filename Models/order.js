const mongoose = require('mongoose');
orderSchema = new mongoose.Schema({
    receive_name: String,
    order_status: {
        type: Number,
        default: 0
    },
    b_name: String
});

module.exports = mongoose.model('order', orderSchema);