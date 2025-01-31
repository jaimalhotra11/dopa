import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  benefits: string[];
  savings?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  duration,
  features,
  isPopular,
  benefits,
  savings,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden ${
        isPopular ? 'border-2 border-[#116DEC] shadow-xl' : 'border border-gray-200 shadow-lg'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#116DEC] text-white px-4 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">₹{price}</span>
          <span className="text-gray-600">/{duration}</span>
          {savings && (
            <div className="text-green-600 text-sm mt-2">Save {savings}</div>
          )}
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-[#116DEC] mt-1 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/contact')}
          className={`w-full py-3 rounded-lg transition ${
            isPopular
              ? 'bg-[#116DEC] text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Get Started
        </button>

        {benefits.length > 0 && (
          <div className="mt-8">
            <h4 className="font-semibold mb-3">Additional Benefits:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PricingCard;