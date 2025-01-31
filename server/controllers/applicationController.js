import Application from '../models/Application.js';
import { sendApplicationConfirmation } from '../utils/emailService.js';


const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position, experience, qualification } = req.body;
    
    const application = await Application.create({
      name,
      email,
      phone,
      position,
      experience,
      qualification,
      resumeUrl: req.file.path
    });

   
    await sendApplicationConfirmation(email, name, position);

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({})
      .sort('-createdAt');
    
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      res.status(404).json({ message: 'Application not found' });
      return;
    }

    application.status = req.body.status;
    const updatedApplication = await application.save();
    
    res.json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  submitApplication,
  getApplications,
  updateApplicationStatus
};