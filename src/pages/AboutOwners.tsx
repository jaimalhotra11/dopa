import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Rocket, Trophy, Clock, Shield, Sparkles } from 'lucide-react';

function App() {
  const features = [
    {
      title: "Neural Optimization",
      description: "Our training methods are designed to boost dopamine production naturally, enhancing motivation and performance."
    },
    {
      title: "Mind-Body Synergy",
      description: "We focus on the powerful connection between mental state and physical achievement."
    },
    {
      title: "Scientific Training",
      description: "Every workout is backed by neuroscience research for maximum effectiveness."
    },
    {
      title: "Sustainable Results",
      description: "Build lasting habits through our dopamine-optimized training approach."
    }
  ];

  const values = [
    {
      icon: <Dna className="w-8 h-8 text-[#116DEC]" />,
      title: "Scientific Approach",
      description: "Our methods are backed by neuroscience and sports psychology research."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#116DEC]" />,
      title: "Peak Performance",
      description: "We help you unlock your full potential through targeted training programs."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#116DEC]" />,
      title: "Achievement Focus",
      description: "Set ambitious goals and crush them with our proven systems."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#116DEC]" />,
      title: "Efficient Training",
      description: "Maximize results with time-optimized workout protocols."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#116DEC]" />,
      title: "Safe Progress",
      description: "Expert guidance ensures safe and sustainable advancement."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#116DEC]" />,
      title: "Lasting Results",
      description: "Build habits and systems that create permanent positive change."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-[#116DEC] to-blue-700 py-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6">Elevate Your Potential</h1>
              <p className="text-xl text-blue-100 mb-8">
                At Dopamine, we've revolutionized fitness by combining cutting-edge neuroscience with proven training methodologies. Our approach doesn't just transform bodies – it optimizes minds.
              </p>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                className="rounded-lg shadow-2xl"
                alt="Neuroscience and fitness concept"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">The Dopamine Difference</h2>
            <p className="text-xl text-gray-600">Discover how we harness the power of neuroscience for optimal fitness results</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#116DEC] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              Founded in 2024, Dopamine emerged from a vision to transform the fitness industry. We recognized that traditional gyms weren't addressing the crucial connection between mental and physical wellness. By integrating neuroscience with fitness training, we've created a revolutionary approach that optimizes both body and mind.
            </p>
            <p className="text-xl text-gray-600">
              Today, we're proud to lead the industry in science-based fitness solutions, helping thousands achieve their peak potential through our innovative programs and state-of-the-art facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-24"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Gym atmosphere"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Evolution</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the future of fitness at Dopamine. Our innovative approach and supportive community are ready to help you achieve extraordinary results.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default App;