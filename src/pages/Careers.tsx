import React from 'react';
import { motion } from 'framer-motion';
import JobCard from '../components/careers/JobCard';
import { Briefcase, Users, Trophy, Heart } from 'lucide-react';

const positions = [
  {
    title: "Senior Personal Trainer",
    type: "Full-time",
    location: "Faridabad",
    salary: "₹40,000 - ₹60,000",
    description: "Join our team of expert trainers and help transform lives through fitness.",
    requirements: [
      "5+ years of personal training experience",
      "Certified Personal Trainer",
      "communication and interpersonal skills",
      "Experience with program design and client assessment"
    ],
    benefits: [
      "Competitive base salary + commission",
      "Health insurance",
      "Free gym membership",
      "Professional development opportunities"
    ]
  },
  {
    title: "Yoga Instructor",
    type: "Part-time",
    location: "Faridabad",
    salary: "₹30,000 - ₹45,000",
    description: "Lead yoga sessions and contribute to our members' wellness journey.",
    requirements: [
      "RYT 200 certification required",
      "2+ years teaching experience",
      "Knowledge of various yoga styles",
      "Ability to modify poses for different skill levels"
    ],
    benefits: [
      "Flexible schedule",
      "Free gym membership",
      "Class development opportunities",
      "Workshop participation"
    ]
  },
  {
    title: "Fitness Manager",
    type: "Full-time",
    location: "Faridabad",
    salary: "₹70,000 - ₹90,000",
    description: "Oversee gym operations and lead our team of fitness professionals.",
    requirements: [
      "Bachelor's degree in related field",
      "5+ years fitness industry experience",
      "Previous management experience",
      "Strong leadership and organizational skills"
    ],
    benefits: [
      "Comprehensive benefits package",
      "Performance bonuses",
      "Leadership development",
      "Career advancement opportunities"
    ]
  }
];

const perks = [
  {
    icon: Trophy,
    title: "Growth Opportunities",
    description: "Clear career progression paths and continuous learning opportunities"
  },
  {
    icon: Heart,
    title: "Wellness Benefits",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Work with passionate professionals in a supportive environment"
  }
];

const Careers = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl">Build your career with the most dynamic fitness brand</p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <perk.icon className="h-12 w-12 text-[#116DEC] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <JobCard key={index} {...position} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;