import { removeCartItem } from '../../controllers/cartController.js';

export default async (req, res) => {
  try {
    const cart = await removeCartItem(req.user.id, req.params.id);
    res.json(cart);
  } catch (err) {
    res.status(err.message === 'Cart not found' ? 404 : 500).json({ message: err.message || 'Server error' });
  }
};