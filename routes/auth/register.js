import { registerUser } from '../../controllers/authController.js';

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await registerUser(email, password);
    res.json({ token });
  } catch (err) {
    res.status(err.message === 'User already exists' ? 400 : 500).json({ message: err.message || 'Server error' });
  }
};
