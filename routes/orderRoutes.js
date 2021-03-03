const express = require('express');
const router = express.Router();
const { getOrders, getOrder, addOrder } = require('../controllers/orderController');

router.route('/').get(getOrders).post(addOrder);

router.route('/:id').get(getOrder);

module.exports = router;