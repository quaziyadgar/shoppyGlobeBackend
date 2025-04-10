import { getAllProducts } from '../../controllers/productController.js';

export default async (req, res) => {
  try {
    const products = await getAllProducts();
    console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Server error' });
  }
};