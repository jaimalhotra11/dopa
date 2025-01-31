import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  type,
  location,
  salary,
  description,
  requirements,
  benefits
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            {type}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Immediate Start
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            {salary}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Benefits:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center">
          <Link
            to="/careers/apply"
            className="bg-[#116DEC] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </Link>
          <button className="text-[#116DEC] hover:underline">
            Save for Later
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;