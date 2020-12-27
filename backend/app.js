const express = require('express');
const app = express();

const errorMiddleware = require("./middlewares/errors");
app.use(express.json());

// Bütün routeları tanımlıyoruz.

const products = require('./routes/product');

app.use('/api/v1',products);

// Hataları ele aldığımız middleware'imiz

app.use(errorMiddleware);

module.exports = app