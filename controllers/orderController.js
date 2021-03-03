const Order = require('../models/Order');

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();

        return res.status(200).json({
            success: true,
            data: orders
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);

        if(!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: order
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addOrder = async (req, res, next) => {
    try {
        const { items, total } = req.body;

        const order = await Order.create(req.body);

        return res.status(201).json({
            success: true,
            data: order
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