const SaleItem = require('../models/SaleItem');

exports.getItems = async (req, res, next) => {
    try {
        const items = await SaleItem.find();

        return res.status(200).json({
            success: true,
            data: items
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addItem = async (req, res, next) => {
    try {
        const {name, price} = req.body;

        const saleItem = await SaleItem.create(req.body);

        return res.status(202).json({
            success: true,
            data: saleItem
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

exports.deleteItem = async (req, res, next) => {
    try {
        const item = await SaleItem.findById(req.params.id);

        if(!item) {
            return res.status(404).json({
                success: false,
                error: 'No sale item found'
            })
        }
        
        await item.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}