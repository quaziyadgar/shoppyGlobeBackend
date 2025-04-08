import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const addToCart = async (userId, productId, quantity) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error('Product not found');

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }
  const itemIndex = cart.items.findIndex(item => item.productId == productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity || 1;
  } else {
    cart.items.push({ productId, quantity: quantity || 1 });
  }
  await cart.save();
  return cart;
};

export const updateCartItem = async (userId, itemId, quantity) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error('Cart not found');
  const item = cart.items.id(itemId);
  if (!item) throw new Error('Item not found');
  item.quantity = quantity;
  await cart.save();
  return cart;
};

export const removeCartItem = async (userId, itemId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error('Cart not found');
  cart.items = cart.items.filter(item => item._id != itemId);
  await cart.save();
  return cart;
};