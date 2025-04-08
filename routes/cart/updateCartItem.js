import { updateCartItem } from '../../controllers/cartController.js';

export default async (req, res) => {
  const { quantity } = req.body;
  try {
    const cart = await updateCartItem(req.user.id, req.params.id, quantity);
    res.json(cart);
  } catch (err) {
    res.status(err.message === 'Cart not found' || err.message === 'Item not found' ? 404 : 500).json({
      message: err.message || 'Server error',
    });
  }
};