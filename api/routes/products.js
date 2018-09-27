
const express = require('express');


const products = require('../controllers/productsController');

const route = express.Router();
// Unsecured routes
route.get('/', products.getAllProducts);
route.post('/', products.createProduct);
route.post('/:id', products.updateProduct);
route.delete('/:id', products.deleteProduct);

// Export - Make Public
module.exports = route;
