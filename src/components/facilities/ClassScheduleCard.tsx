import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

interface ClassScheduleCardProps {
  name: string;
  instructor: string;
  time: string;
  capacity: number;
  level: string;
  duration: string;
}

const ClassScheduleCard: React.FC<ClassScheduleCardProps> = ({
  name,
  instructor,
  time,
  capacity,
  level,
  duration,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-[#116DEC] mb-4">{instructor}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          {time} ({duration})
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          Capacity: {capacity} people
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-sm ${
          level === 'Beginner' ? 'bg-green-100 text-green-800' :
          level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {level}
        </span>
        
      </div>
    </motion.div>
  );
};

export default ClassScheduleCard;