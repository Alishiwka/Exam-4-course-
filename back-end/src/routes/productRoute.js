const express = require('express');
const router = express.Router();

const { productController } = require('../controllers/productController');


router.get('/products/get-products', productController);
module.exports = router;