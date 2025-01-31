import express from 'express';
import {
  createClass,
  getClasses,
  getClassById,
  updateClass
} from '../controllers/classController.js';
import { protect, trainer } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, trainer, createClass)
  .get(getClasses);

router.route('/:id')
  .get(getClassById)
  .put(protect, trainer, updateClass);

export default router;