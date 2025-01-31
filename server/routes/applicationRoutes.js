import express from 'express';
import {
  submitApplication,
  getApplications,
  updateApplicationStatus
} from '../controllers/applicationController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/', upload.single('resume'), submitApplication);
router.get('/', protect, admin, getApplications);
router.put('/:id', protect, admin, updateApplicationStatus);

export default router;