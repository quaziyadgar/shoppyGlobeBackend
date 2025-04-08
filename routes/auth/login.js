import { loginUser } from '../../controllers/authController.js';

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (err) {
    res.status(err.message === 'Invalid credentials' ? 400 : 500).json({ message: err.message || 'Server error' });
  }
};