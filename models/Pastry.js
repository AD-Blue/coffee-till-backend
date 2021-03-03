const mongoose = require('mongoose');

const PastrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pastry needs a name']
    },
    price: {
        type: Number,
        required: [true, 'Pastry needs a price']
    }
})

module.exports = mongoose.model('Pastry', PastrySchema);