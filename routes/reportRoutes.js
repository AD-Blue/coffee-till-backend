const express = require('express');
const router = express.Router();
const { getReports, getReport, addReport } = require('../controllers/reportController');

router.route('/').get(getReports).post(addReport);

router.route('/:id').get(getReport);

module.exports = router;