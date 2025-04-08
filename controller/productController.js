import Product from '../models/Product.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new Error('Product not found');
  return product;
};