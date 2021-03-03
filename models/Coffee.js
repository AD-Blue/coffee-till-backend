const mongoose = require('mongoose');

const CoffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Coffee needs a name']
    },
    smPrice: {
        type: Number,
        required: [true, 'Coffee needs a price']
    },
    mdPrice: {
        type: Number,
        required: [true, 'Coffee needs a price']
    },
    lgPrice: {
        type: Number,
        required: [true, 'Coffee needs a price']
    }
})

module.exports = mongoose.model('Coffee', CoffeeSchema)