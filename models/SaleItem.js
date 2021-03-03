const mongoose = require('mongoose');

const SaleItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('SaleItem', SaleItemSchema);