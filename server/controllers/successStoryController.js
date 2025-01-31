import SuccessStory from '../models/SuccessStory.js';
import upload from '../middleware/uploadMiddleware.js';


const createSuccessStory = async (req, res) => {
  try {
    const { title, content, achievement, rating } = req.body;
    
    const successStory = await SuccessStory.create({
      user: req.user._id,
      title,
      content,
      achievement,
      rating,
      beforeImage: req.files?.beforeImage?.[0].path,
      afterImage: req.files?.afterImage?.[0].path
    });

    res.status(201).json(successStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find({ status: 'approved' })
      .populate('user', 'name')
      .sort('-createdAt');
    
    res.json(successStories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUserSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find({ user: req.user._id })
      .sort('-createdAt');
    
    res.json(successStories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update success story status
// @route   PUT /api/success-stories/:id
// @access  Private/Admin
const updateSuccessStoryStatus = async (req, res) => {
  try {
    const successStory = await SuccessStory.findById(req.params.id);
    
    if (!successStory) {
      res.status(404).json({ message: 'Success story not found' });
      return;
    }

    successStory.status = req.body.status;
    const updatedStory = await successStory.save();
    
    res.json(updatedStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createSuccessStory,
  getSuccessStories,
  getUserSuccessStories,
  updateSuccessStoryStatus
};