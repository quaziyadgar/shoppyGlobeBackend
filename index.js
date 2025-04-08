import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import productRouter from './routers/productRouter.js';
import cartRouter from './routers/cartRouter.js';
import authRouter from './routers/authRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Apply middleware
app.use('/api', userRoutes);

// Routes
app.get('/', (req, res) => res.send('ShoppyGlobe Backend'));
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/auth', authRouter);

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, ()=>{console.log(`Server running on port:${PORT}`)})