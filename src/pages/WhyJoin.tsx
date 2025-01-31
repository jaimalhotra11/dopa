import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Monitor,
  Snowflake,
  Music,
  Bed,
  Award,
  Sun,
  Heart,
  UserCheck,
  Users,
  Shield,
  Star,
  Coffee,
  Users as Team,
  Activity,
} from "lucide-react";


const fetchBenefits = async () => {
  return [
    { icon: Dumbbell, title: "10,000+ sq. ft area", description: "Spacious workout environment" },
    { icon: Monitor, title: "AI mirror", description: "Real-time form correction" },
    { icon: Snowflake, title: "Ice bath", description: "Recovery and wellness" },
    { icon: Music, title: "Sound healing", description: "Mental wellness therapy" },
    { icon: Bed, title: "Therapy bed", description: "Advanced recovery options" },
    { icon: Award, title: "Precor equipment", description: "World No. 1 brand, injury-free" },
    { icon: Sun, title: "Double height area", description: "Zero suffocation guarantee" },
    { icon: Heart, title: "Less artificial light", description: "Soothing effect for eyes" },
    { icon: UserCheck, title: "Certified trainers", description: "Expert guidance" },
    { icon: Users, title: "General trainers", description: "Always available to help" },
    { icon: Shield, title: "Medical emergency kits", description: "Safety-first approach" },
    { icon: Star, title: "Female trainers", description: "Comfortable training environment" },
    { icon: Coffee, title: "Café area", description: "Healthy diet food options" },
    { icon: Team, title: "Counseling area", description: "Personal meeting space" },
    { icon: Activity, title: "Group classes", description: "Top-notch fitness programs" },
    { icon: Team, title: "Filtered Crowd", description: "Elite, Focused, Distraction-Free" },
  ];
};

const WhyJoin = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBenefits();
      setBenefits(data);
    };
    fetchData();
  }, []);

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Why Join Dopamine?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience fitness like never before with our state-of-the-art facilities
            and expert guidance. Here's what makes us different.
          </p>
        </motion.div>

        {benefits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="w-10 h-10 text-[#116DEC] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">Loading benefits...</div>
        )}
      </div>
    </div>
  );
};

export default WhyJoin;
