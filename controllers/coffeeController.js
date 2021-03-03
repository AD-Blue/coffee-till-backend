const Coffee = require('../models/Coffee');

exports.getCoffees = async (req, res, next) => {
    try {
        const coffees = await Coffee.find();
        
        return res.status(200).json({
            success: true,
            data: coffees
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getCoffee = async (req, res, next) => {
    try {
        const coffee = await Coffee.findById(req.params.id);

        if(!coffee) {
            return res.status(404).json({
                success: false,
                error: 'Coffee not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: coffee
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addCoffee = async (req, res, next) => {
    try {
        const {name, smPrice, mdPrice, lgPrice} = req.body;

        const coffee = await Coffee.create(req.body);

        return res.status(201).json({
            success: true,
            data: coffee
        })
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            }); //400 is client error 
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}