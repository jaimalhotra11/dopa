import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';

// Route imports
import userRoutes from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import classRoutes from './routes/classRoutes.js';
import successStoryRoutes from './routes/successStoryRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/success-stories', successStoryRoutes);
app.use('/api/applications', applicationRoutes);


app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});