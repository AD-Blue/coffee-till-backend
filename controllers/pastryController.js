const Pastry = require('../models/Pastry');

exports.getPastries = async (req, res, next) => {
    try {
        const pastries = await Pastry.find();
        
        return res.status(200).json({
            success: true,
            data: pastries
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getPastry = async (req, res, next) => {
    try {
        const pastry = await Pastry.findById(req.params.id);

        if(!pastry) {
            return res.status(404).json({
                success: false,
                error: 'Pastry not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: pastry
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addPastry = async (req, res, next) => {
    try {
        const {name, price} = req.body;

        const pastry = await Pastry.create(req.body);

        return res.status(201).json({
            success: true,
            data: pastry
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