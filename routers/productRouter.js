import express from 'express';
import getProducts from '../routes/product/getProducts.js';
import getProductById from '../routes/product/getProductById.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);

export default router;