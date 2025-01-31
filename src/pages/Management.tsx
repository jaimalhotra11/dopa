import React from 'react';
import { motion } from 'framer-motion';

const staff = [
  {
    name: 'Ajay Thapa',
    role: 'Club Manager',
    image: 'assets/images/thapa.jpg',
    description: 'Oversees daily operations and ensures member satisfaction.',
    expertise: 'Business Management, Customer Service'
  },
  {
    name: 'Akash Nigam',
    role: 'Sales Manager',
    image: 'assets/images/aakash.jpg',
    description: 'Leads our team of trainers and develops training programs.',
    expertise: 'Program Development, Team Leadership'
  },
  {
    name: 'Manish Rawat',
    role: 'Assistant Sales Manager',
    image: 'assets/images/manish.jpg',
    description: 'Coordinates wellness programs and member health initiatives.',
    expertise: 'Wellness Planning, Health Education'
  },
  {
    name: 'Yudhveer Chauhan',
    role: 'Assistant Sales Manager',
    image: 'assets/images/yudhveer.jpg',
    description: 'Maintains our world-class facilities and equipment.',
    expertise: 'Facility Management, Equipment Maintenance'
  }
];

const Management = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Management Staff</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who ensure Dopamine delivers excellence
            in every aspect of your fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#116DEC] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Expertise:</span> {member.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
