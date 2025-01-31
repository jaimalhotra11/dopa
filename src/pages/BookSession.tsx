import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '@formspree/react';

const BookSession = () => {
  const [state, handleSubmit] = useForm('mqaeqkkw');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trainer: '',
    date: '',
    sessionType: 'personal',
  });

  const navigate = useNavigate();
  const location = useLocation(); // Used for detecting route changes

  // Scroll to the top when the component is loaded or route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  // Example: Navigate to a confirmation page on successful submission
  useEffect(() => {
    if (state.succeeded) {
      navigate('/confirmation'); // Adjust this route as needed
    }
  }, [state.succeeded, navigate]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Book a Training Session</h1>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name='name'
                required
                className="w-full p-3 border rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name='email'
                required
                className="w-full p-3 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name='phone'
                required
                className="w-full p-3 border rounded-lg"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Select Trainer</label>
              <select
                className="w-full p-3 border rounded-lg"
                name='trainer'
                value={formData.trainer}
                onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                required
              >
                <option value="">Select a trainer</option>
                <option value="Rajvansh Chaudhary">Rajvansh Chaudhary - Strength & Conditioning</option>
                <option value="Rohit Jaglan">Rohit Jaglan - Functional Training</option>
                <option value="Parul Lamba">Parul Lamba - Fat Loss</option>
                <option value="Akash Sunar">Akash Sunar - Transformation</option>
                <option value="Ajay Lehri">Ajay Lehri - Muscle Building</option>
                <option value="Akash Sunar">Akash Sunar - Transformation</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name='date'
                required
                className="w-full p-3 border rounded-lg"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Session Type</label>
              <select
              name='sessionType'
                className="w-full p-3 border rounded-lg"
                value={formData.sessionType}
                onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                required
              >
                <option value="personal">Personal Training</option>
                <option value="group">Group Session</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#116DEC] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
