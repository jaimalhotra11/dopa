import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Briefcase } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

const CareerApplication = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm('mqaeqkkw'); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: ''
  });

  // Navigate to the "Thank You" page after successful submission
  if (state.succeeded) {
    alert("Thank you We'll be contact you soon!")
    navigate('/confirmation'); // Adjust this route as needed

  }

  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl">Apply now and become part of something great</p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Position Applied For *</label>
                <select
                  name="position"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                >
                  <option value="">Select Position</option>
                  <option value="Senior Personal Trainer">Senior Personal Trainer</option>
                  <option value="Yoga Instructor">Yoga Instructor</option>
                  <option value="Fitness Manager">Fitness Manager</option>
                </select>
                <ValidationError prefix="Position" field="position" errors={state.errors} />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Years of Experience *</label>
              <input
                type="number"
                name="experience"
                required
                min="0"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
              <ValidationError prefix="Experience" field="experience" errors={state.errors} />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Education/Certifications *</label>
              <textarea
                name="education"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC] h-32"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              ></textarea>
              <ValidationError prefix="Education" field="education" errors={state.errors} />
            </div>

  

            <div>
              <label className="block text-gray-700 mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC] h-48"
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
              <ValidationError prefix="Cover Letter" field="coverLetter" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#116DEC] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            >
              <Briefcase className="h-5 w-5" />
              <span>{state.submitting ? "Submitting..." : "Submit Application"}</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareerApplication;
