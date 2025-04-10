import { addToCart } from '../../controllers/cartController.js';

export default async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cart = await addToCart(req.user.id, productId, quantity);
    console.log(cart);
    res.json(cart);
  } catch (err) {
    res.status(err.message === 'Product not found' ? 404 : 500).json({ message: err.message || 'Server error' });
  }
};