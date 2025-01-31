import express from 'express';
import { createBooking, getBookings, updateBooking } from '../controllers/bookingController.js';
import { sendBookingEmail } from '../utils/emailService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const booking = await createBooking(req.body);
    await sendBookingEmail(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', getBookings);
router.put('/:id', updateBooking);

export default router;