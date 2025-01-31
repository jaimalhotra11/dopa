import React from 'react';
import FacilityCard from '../components/facilities/FacilityCard';
import ClassScheduleCard from '../components/facilities/ClassScheduleCard';
import { motion } from 'framer-motion';

const facilities = [
  {
    name: 'Strength Training Zone',
    description: 'State-of-the-art strength training area with premium equipment',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    features: [
      'Premium Hammer Strength equipment',
      'Olympic weightlifting platforms',
      'Power racks and squat racks',
      'Free weights area'
    ],
    equipment: [
      'Smith machines',
      'Cable machines',
      'Dumbbells up to 50kg',
      'Olympic barbells',
      'Specialized bars'
    ]
  },
  {
    name: 'Cardio Arena',
    description: 'Spacious cardio section with latest machines',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c',
    features: [
      'Treadmills with entertainment systems',
      'Ellipticals and bikes',
      'Rowing machines',
      'Stair climbers'
    ],
    equipment: [
      'Life Fitness treadmills',
      'Concept2 rowers',
      'Assault bikes',
      'Precor ellipticals'
    ]
  },
  {
    name: 'Mind & Body Studio',
    description: 'Peaceful space for yoga and meditation',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597',
    features: [
      'Bamboo flooring',
      'Natural lighting',
      'Meditation corner',
      'Props and equipment provided'
    ],
    equipment: [
      'Yoga mats',
      'Meditation cushions',
      'Resistance bands',
      'Blocks and straps'
    ]
  },
  {
    name: 'Therapy Room',
    description: 'Dedicated space for recovery and relaxation',
    image: 'https://media.istockphoto.com/id/1460882644/photo/senior-at-a-physiotherapy-appointment.jpg?s=612x612&w=0&k=20&c=4jXzvRvZKa7vDMpOrnWspqD3muVgW0_yMNQfscBd6Bc=',
    features: [
      'Healing room',
      'Ice bath therapy',
      'Steam room',
      'Massage and recovery services'
    ],
    equipment: [
      'Massage tables',
      'Ice bath setup',
      'Aromatherapy kits',
      'Steam generators'
    ]
  }
];

const classes = [
  {
    name: 'Yoga',
    instructor: 'Nikhil',
    time: 'Monday - Saturday - 7:00 AM - 8:00 AM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Core Blasters',
    instructor: 'Akash',
    time: 'Monday - Saturday - 7:00 PM - 8:00 PM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Circuit Training',
    instructor: 'Rohit',
    time: 'Monday - Saturday - 7:00 AM - 8:00 AM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Latination',
    instructor: 'Sumit',
    time: 'Monday - Saturday - 7:00 PM - 8:00 PM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Functional Training',
    instructor: 'Akash',
    time: 'Monday - Saturday - 7:00 AM - 8:00 AM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Dance Fitness',
    instructor: 'Suvneet',
    time: 'Monday - Saturday - 7:00 PM - 8:00 PM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Stretching Class',
    instructor: 'Arun',
    time: 'Monday - Saturday - 7:00 AM - 8:00 AM',
    capacity: 20,
    level: 'All Levels',
    duration: '45 min'
  },
  {
    name: 'Kick Boxing',
    instructor: 'Ranjeet Jha',
    time: 'Monday - Saturday - 7:00 PM - 8:00 PM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Tabata',
    instructor: 'Arvind Minz',
    time: 'Monday - Saturday -7:00 PM - 8:00 PM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Bhangra',
    instructor: 'Rahul',
    time: 'Monday - Saturday - 7:00 AM - 8:00 AM',
    capacity: 20,
    level: 'All Levels',
    duration: '60 min'
  },
  {
    name: 'Rehabpilates',
    instructor: 'Sumit',
    time: 'Monday - Saturday - 7:00 AM - 8:00 AM',
    capacity: '20',
    level: 'All Levels',
    duration: '60 min'
  }
];

const Facilities = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">World-Class Facilities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience fitness in a premium environment with cutting-edge equipment
            and specialized training zones designed for optimal results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our diverse range of classes led by expert instructors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <ClassScheduleCard key={index} {...classItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
