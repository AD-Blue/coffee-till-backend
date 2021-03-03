const express = require('express');
const router = express.Router();
const { getCoffees, getCoffee, addCoffee } = require('../controllers/coffeeController');

router.route('/').get(getCoffees).post(addCoffee);

router.route('/:id').get(getCoffee);

module.exports = router;