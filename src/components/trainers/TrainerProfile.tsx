import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TrainerProfileProps {
  name: string;
  specialty: string;
  image: string;
  experience: number;
  rating: number;
  certifications: string[];
  schedule: {
    day: string;
    slots: { time: string; available: boolean }[];
  }[];
  bio: string;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({
  name,
  specialty,
  image,
  experience,
  rating,
  certifications,
  schedule,
  bio,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{name}</h3>
              <p className="text-[#116DEC] font-semibold">{specialty}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-[#116DEC] mr-2" />
              <span>{experience} years experience</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-[#116DEC] mr-2" />
              <span>{certifications.length} certifications</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{bio}</p>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Certifications:</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Available Slots:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {schedule.map((day, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-[#116DEC] mr-2" />
                    <span className="font-medium">{day.day}</span>
                  </div>
                  <div className="space-y-1">
                    {day.slots.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className={`text-sm ${
                          slot.available ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {slot.time} - {slot.available ? 'Available' : 'Booked'}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/book-session')}
            className="w-full bg-[#116DEC] text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Book a Session
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerProfile;