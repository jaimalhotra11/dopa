import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

const ADMIN_EMAIL = 'jaimalhotra0011@gmail.com';

export const sendApplicationConfirmation = async (email, name, position) => {
  try {
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Application Received - Dopamine Gym',
      html: `
        <h1>Thank you for applying, ${name}!</h1>
        <p>We have received your application for the position of ${position}.</p>
        <p>Our team will review your application and get back to you soon.</p>
        <br>
        <p>Best regards,</p>
        <p>Dopamine Gym Team</p>
      `
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Job Application Received - Dopamine Gym',
      html: `
        <h1>New Job Application</h1>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Applicant Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p>Login to the admin dashboard to view full details.</p>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }
};

export const sendBookingNotification = async (bookingData) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Session Booking - Dopamine Gym',
      html: `
        <h1>New Session Booking</h1>
        <p><strong>Client Name:</strong> ${bookingData.userName}</p>
        <p><strong>Session Type:</strong> ${bookingData.sessionType}</p>
        <p><strong>Date:</strong> ${new Date(bookingData.date).toLocaleString()}</p>
        <p><strong>Trainer:</strong> ${bookingData.trainerName}</p>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }
};

export const sendSuccessStoryNotification = async (storyData) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Success Story Submission - Dopamine Gym',
      html: `
        <h1>New Success Story Submission</h1>
        <p><strong>Member Name:</strong> ${storyData.name}</p>
        <p><strong>Achievement:</strong> ${storyData.achievement}</p>
        <p><strong>Story:</strong> ${storyData.content}</p>
        <br>
        <p>Login to the admin dashboard to review and approve the story.</p>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }
};

export const sendContactFormNotification = async (contactData) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: 'New Contact Form Submission - Dopamine Gym',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong> ${contactData.message}</p>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }
};