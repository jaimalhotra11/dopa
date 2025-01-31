import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FacilityCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
  equipment?: string[];
}

const FacilityCard: React.FC<FacilityCardProps> = ({ name, description, image, features, equipment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-[#116DEC] mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {equipment && (
          <div>
            <h4 className="font-semibold mb-2">Equipment:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {equipment.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FacilityCard;