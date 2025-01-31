import React from 'react';
import { motion } from 'framer-motion';
import MembershipPlans from '../components/pricing/MembershipPlans';
import { Shield, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "Transparent pricing with GST clearly mentioned"
  },
  {
    icon: Clock,
    title: "Flexible Plans",
    description: "Choose the membership type that suits you best"
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Multiple payment options available"
  }
];

const Pricing = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Membership Plans</h1>
            <p className="text-xl">
              Choose the perfect plan for your fitness journey
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <feature.icon className="h-12 w-12 text-[#116DEC] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <MembershipPlans />
        </div>
      </section>
    </div>
  );
};

export default Pricing;