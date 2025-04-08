import { getProductById } from '../../controllers/productController.js';

export default async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(err.message === 'Product not found' ? 404 : 500).json({ message: err.message || 'Server error' });
  }
};