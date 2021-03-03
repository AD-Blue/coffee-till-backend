const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'})

connectDB();

const coffees = require('./routes/coffeeRoutes');
const pastries = require('./routes/pastryRoutes');
const saleItems = require('./routes/saleItemRoutes');
const orders = require('./routes/orderRoutes');
const reports = require('./routes/reportRoutes');

const app = express();

app.use(express.json());
app.use('/api/v1/coffees', coffees);
app.use('/api/v1/pastries', pastries);
app.use('/api/v1/saleItems', saleItems);
app.use('/api/v1/orders', orders);
app.use('/api/v1/reports', reports);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))