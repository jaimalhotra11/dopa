import Booking from '../models/Booking.js';
import User from '../models/User.js';

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  try {
    const { trainerId, date, sessionType } = req.body;
    
    const trainer = await User.findById(trainerId);
    if (!trainer || trainer.role !== 'trainer') {
      res.status(404).json({ message: 'Trainer not found' });
      return;
    }

    const booking = await Booking.create({
      user: req.user._id,
      trainer: trainerId,
      date,
      sessionType
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('trainer', 'name')
      .sort('-date');
    
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get trainer bookings
// @route   GET /api/bookings/trainer
// @access  Private/Trainer
const getTrainerBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ trainer: req.user._id })
      .populate('user', 'name')
      .sort('-date');
    
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private/Trainer
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      res.status(404).json({ message: 'Booking not found' });
      return;
    }

    if (booking.trainer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      res.status(401).json({ message: 'Not authorized' });
      return;
    }

    booking.status = req.body.status;
    const updatedBooking = await booking.save();
    
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createBooking,
  getUserBookings,
  getTrainerBookings,
  updateBookingStatus
};