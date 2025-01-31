import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  achievement: {
    type: String,
    required: true
  },
  beforeImage: {
    type: String
  },
  afterImage: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

export default SuccessStory;