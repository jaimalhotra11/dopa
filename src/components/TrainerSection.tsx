import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const trainers = [
  {
    name: "Rajvansh",
    specialty: "Strength & Conditioning",
    image: "./assets/images/rajvansh.jpg"
  },
  {
    name: "Parul Lamba",
    specialty: "Body Toning",
    image: "./assets/images/parul.jpg"
  },
  {
    name: "Pawan Chandila",
    specialty: "Muscle Building",
    image: "./assets/images/pawan.JPG"
  }
];

export default function TrainerSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Expert Trainers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Work with our certified trainers to achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-[#116DEC] mb-4">{trainer.specialty}</p>
                <button
                  onClick={() => navigate('/book-session')}
                  className="w-full bg-[#116DEC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/trainers')}
            className="bg-[#116DEC] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View All Trainers
          </motion.button>
        </div>
      </div>
    </section>
  );
}