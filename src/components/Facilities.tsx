import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dumbbell, Users, Heart, Music, Brain, Waves, Zap, Timer } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Premium Equipment",
    description: "State-of-the-art fitness equipment for every workout style",
    color: "bg-blue-50"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Therapy Room",
    description: "Mental wellness support and relaxation spaces",
    color: "bg-purple-50"
  },
  {
    icon: <Waves className="h-8 w-8" />,
    title: "Combat Zone",
    description: "Professional boxing and martial arts area",
    color: "bg-red-50"
  },
 {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Strength Training",
    description: "Comprehensive strength training facilities with expert guidance",
    color: "bg-pink-50"
},
  {
    icon: <Users className="h-8 w-8" />,
    title: "Group Classes",
    description: "Diverse range of group fitness activities",
    color: "bg-green-50"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Personal Training",
    description: "Customized workout plans with expert trainers",
    color: "bg-yellow-50"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Recovery Zone",
    description: "Advanced recovery and rehabilitation equipment",
    color: "bg-orange-50"
  },
  {
    icon: <Timer className="h-8 w-8" />,
    title: "19/7 Access",
    description: "Train anytime with secure facility access",
    color: "bg-indigo-50"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${feature.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition group`}
    >
      <div className="text-[#116DEC] mb-4 transform group-hover:scale-110 transition-transform">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#116DEC] transition">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium fitness amenities designed to elevate your workout journey
            and help you achieve your fitness goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}