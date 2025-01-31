import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const generalTrainers = [
  {
    name: "Prashant Chandila",
    image: "./assets/images/prashant.jpg",
    description: "Specializes in group fitness classes and general workout routines"
  },
  {
    name: "Om Keshon",
    image: "./assets/images/om.JPG",
    description: "Expert in cardio training and weight management programs"
  },
  {
    name: "Kapil",
    image: "./assets/images/kapil.jpg",
    description: "Focuses on beginner-friendly training and form correction"
  }
];

const GeneralTrainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {generalTrainers.map((trainer, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
            <div className="flex items-center text-[#116DEC] mb-3">
              <Users className="h-5 w-5 mr-2" />
              <span>General Trainer</span>
            </div>
            <p className="text-gray-600">{trainer.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GeneralTrainer;