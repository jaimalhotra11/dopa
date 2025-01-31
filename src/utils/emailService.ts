import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

const ADMIN_EMAIL = 'jaimalhotra0011@gmail.com';

export const sendBookingEmail = async (bookingData) => {
  try {
    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: bookingData.email,
      subject: 'Booking Confirmation - Dopamine Gym',
      html: `
        <h1>Thank you for booking a session!</h1>
        <p>Your session details:</p>
        <ul>
          <li>Trainer: ${bookingData.trainer}</li>
          <li>Date: ${bookingData.date}</li>
          <li>Session Type: ${bookingData.sessionType}</li>
        </ul>
        <p>We'll contact you shortly to confirm your booking.</p>
      `
    });

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Session Booking - Dopamine Gym',
      html: `
        <h1>New Session Booking</h1>
        <ul>
          <li>Name: ${bookingData.name}</li>
          <li>Email: ${bookingData.email}</li>
          <li>Phone: ${bookingData.phone}</li>
          <li>Trainer: ${bookingData.trainer}</li>
          <li>Date: ${bookingData.date}</li>
          <li>Session Type: ${bookingData.sessionType}</li>
        </ul>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

export const sendContactFormEmail = async (contactData) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Contact Form Submission - Dopamine Gym',
      html: `
        <h1>New Contact Form Submission</h1>
        <ul>
          <li>Name: ${contactData.name}</li>
          <li>Email: ${contactData.email}</li>
          <li>Message: ${contactData.message}</li>
        </ul>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

export const sendSuccessStoryEmail = async (storyData) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Success Story Submission - Dopamine Gym',
      html: `
        <h1>New Success Story Submission</h1>
        <ul>
          <li>Name: ${storyData.name}</li>
          <li>Age: ${storyData.age}</li>
          <li>Achievement: ${storyData.achievement}</li>
          <li>Story: ${storyData.story}</li>
        </ul>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

export const sendCareerApplicationEmail = async (applicationData) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Career Application - Dopamine Gym',
      html: `
        <h1>New Career Application</h1>
        <ul>
          <li>Name: ${applicationData.name}</li>
          <li>Age: ${applicationData.age}</li>
          <li>Position: ${applicationData.position}</li>
          <li>Qualification: ${applicationData.qualification}</li>
          <li>Experience: ${applicationData.experience}</li>
        </ul>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};