const express = require('express');
const router = express.Router();
const { getPastries, getPastry, addPastry } = require('../controllers/pastryController');

router.route('/').get(getPastries).post(addPastry);

router.route('/:id').get(getPastry);

module.exports = router;