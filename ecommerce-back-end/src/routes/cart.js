const express = require('express');
const { addToCart } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../middleware');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignin , userMiddleware , addToCart);

module.exports = router;
