import express from 'express';
import {
  createSuccessStory,
  getSuccessStories,
  getUserSuccessStories,
  updateSuccessStoryStatus
} from '../controllers/successStoryController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, upload.fields([
    { name: 'beforeImage', maxCount: 1 },
    { name: 'afterImage', maxCount: 1 }
  ]), createSuccessStory)
  .get(getSuccessStories);

router.get('/my-stories', protect, getUserSuccessStories);
router.put('/:id', protect, admin, updateSuccessStoryStatus);

export default router;