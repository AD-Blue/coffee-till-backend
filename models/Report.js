const mongoose = require('mongoose');
const Order = require('./Order').schema;

const ReportSchema = new mongoose.Schema({
    orders: {
        type: [Order],
        required: [true, 'You cannot have an empty report']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Report', ReportSchema);