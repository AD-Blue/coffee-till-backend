const Report = require('../models/Report');

exports.getReports = async (req, res, next) => {
    try {
        const reports = await Report.find();

        return res.status(200).json({
            success: true,
            data: reports
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getReport = async (req, res, next) => {
    try {
        const report = await Report.findById(req.params.id);

        if(!report) {
            return res.status(404).json({
                success: false,
                error: 'Report not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: report
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addReport = async (req, res, next) => {
    try {
        const { orders } = req.body;

        const report = await Report.create(req.body);

        return res.status(201).json({
            success: true,
            data: report
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