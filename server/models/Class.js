import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  schedule: {
    day: {
      type: String,
      required: true,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    time: {
      type: String,
      required: true
    }
  },
  capacity: {
    type: Number,
    required: true
  },
  currentBookings: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Class = mongoose.model('Class', classSchema);

export default Class;