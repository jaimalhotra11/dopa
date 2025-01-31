import React from 'react';
import { Check, X } from 'lucide-react';

const PricingComparison = () => {
  const features = [
    { name: 'Access to Gym Equipment', basic: true, premium: true, elite: true },
    { name: 'Locker Room Access', basic: true, premium: true, elite: true },
    { name: 'Group Classes', basic: '2/month', premium: 'Unlimited', elite: 'Unlimited' },
    { name: 'Personal Training Sessions', basic: false, premium: '1/month', elite: '4/month' },
    { name: 'Nutrition Consultation', basic: false, premium: '1/quarter', elite: 'Monthly' },
    { name: 'Recovery Zone Access', basic: false, premium: '2 hours/week', elite: 'Unlimited' },
    { name: 'Guest Passes', basic: false, premium: '2/month', elite: '4/month' },
    { name: 'Priority Booking', basic: false, premium: true, elite: true },
    { name: 'Exclusive Workshops', basic: false, premium: false, elite: true },
    { name: '24/7 Trainer Support', basic: false, premium: false, elite: true },
  ];

  return (
    <div className="overflow-x-auto mt-12">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left">Features</th>
            <th className="px-6 py-4 text-center">Basic</th>
            <th className="px-6 py-4 text-center">Premium</th>
            <th className="px-6 py-4 text-center">Elite</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4">{feature.name}</td>
              <td className="px-6 py-4 text-center">
                {typeof feature.basic === 'boolean' ? (
                  feature.basic ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                ) : (
                  feature.basic
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {typeof feature.premium === 'boolean' ? (
                  feature.premium ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                ) : (
                  feature.premium
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {typeof feature.elite === 'boolean' ? (
                  feature.elite ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                ) : (
                  feature.elite
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparison;