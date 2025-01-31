import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Individual",
    price: "25,000",
    features: [
      "Full gym access",
      "Personal locker",
      "Access to all classes",
      "Fitness assessment",
      "Nutrition consultation"
    ]
  },
  {
    name: "Couple",
    price: "20,000",
    perPerson: true,
    features: [
      "All individual benefits",
      "Shared personal trainer sessions",
      "Partner workout programs",
      "Couple's fitness assessment",
      "Joint nutrition planning"
    ]
  },
  {
    name: "Buddy (3 Members)",
    price: "22,000",
    perPerson: true,
    features: [
      "All individual benefits",
      "Group training sessions",
      "Shared workout tracking",
      "Group challenges",
      "Priority class booking"
    ]
  },
  {
    name: "Buddy (6 Members)",
    price: "18,000",
    perPerson: true,
    features: [
      "All individual benefits",
      "Dedicated group trainer",
      "Custom group programs",
      "Team challenges",
      "Exclusive group events"
    ]
  },
  {
    name: "Student",
    price: "18,000",
    features: [
      "Valid student ID required",
      "Full gym access",
      "Access to classes",
      "Student community events",
      "Special workshop access"
    ],
    note: "Available for selected colleges only"
  }
];

const MembershipPlans = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹{plan.price}</span>
              <span className="text-gray-600">+ GST</span>
              {plan.perPerson && (
                <span className="block text-sm text-gray-500">per person</span>
              )}
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {plan.note && (
              <p className="text-sm text-gray-500 mt-4">{plan.note}</p>
            )}
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-8 text-center">
        * Prices may vary based on selected seasons and promotions. Contact us for current offers.
      </p>
    </div>
  );
};

export default MembershipPlans;