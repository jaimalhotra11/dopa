import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';

const schedule = {
  "Rajvansh": {
    slots: [
      { time: "07:00 AM", available: 3 },
      { time: "09:00 AM", available: 2 },
      { time: "05:00 PM", available: 4 }
    ],
    specialty: "Strength & Conditioning"
  },
  "Rohit Jaglan": {
    slots: [
      { time: "08:00 AM", available: 5 },
      { time: "04:00 PM", available: 1 },
      { time: "06:00 PM", available: 3 }
    ],
    specialty: "Functional training"
  },
  "Akash Verma": {
    slots: [
      { time: "10:00 AM", available: 4 },
      { time: "02:00 PM", available: 2 },
      { time: "07:00 PM", available: 3 }
    ],
    specialty: "Strength Development"
  }
};

export default function ClassSchedule() {
  const navigate = useNavigate();
  const [selectedTrainer, setSelectedTrainer] = useState(Object.keys(schedule)[0]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Available Sessions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your training session with our expert trainers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Select Trainer</h3>
            <div className="space-y-2">
              {Object.keys(schedule).map((trainer) => (
                <button
                  key={trainer}
                  onClick={() => setSelectedTrainer(trainer)}
                  className={`w-full p-4 rounded-lg text-left transition ${
                    selectedTrainer === trainer
                      ? 'bg-[#116DEC] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">{trainer}</div>
                  <div className="text-sm opacity-80">{schedule[trainer].specialty}</div>
                </button>
              ))}
            </div>
          </div>

          
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-4">Available Slots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {schedule[selectedTrainer].slots.map((slot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-[#116DEC]" />
                    <span className="font-semibold">{slot.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="h-5 w-5 text-[#116DEC]" />
                    <span>{slot.available} spots available</span>
                  </div>
                  <button
                    onClick={() => navigate('/book-session')}
                    className="w-full bg-[#116DEC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Book Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}