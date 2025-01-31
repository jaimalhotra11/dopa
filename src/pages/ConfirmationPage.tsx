import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Form Submitted Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out! We have received your information and will get back to you shortly.
        </p>
        <button
          onClick={() => navigate('/')} // Redirect to home page or any desired page
          className="bg-[#116DEC] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
