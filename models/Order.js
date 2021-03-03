const mongoose = require('mongoose');
const SaleItem = require('./SaleItem').schema;

const OrderSchema = new mongoose.Schema({
    items: {
        type: [SaleItem],
        required: [true, 'You cannot place an empty order']
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', OrderSchema);