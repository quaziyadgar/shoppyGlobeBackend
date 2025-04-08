import express from 'express';
import addToCart from '../routes/cart/addToCart.js';
import updateCartItem from '../routes/cart/updateCartItem.js';
import removeCartItem from '../routes/cart/removeCartItem.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, addToCart);
router.put('/:id', auth, updateCartItem);
router.delete('/:id', auth, removeCartItem);

export default router;