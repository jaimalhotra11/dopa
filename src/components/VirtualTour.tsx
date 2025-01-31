import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VirtualTour() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Experience DOPAMINE</h2>
            <p className="text-gray-600 mb-8">
              Take a virtual journey through our world-class facilities. Explore our premium 
              equipment, specialized training zones, and luxurious amenities.
            </p>
            <div className="space-y-4">
              {[
                "State-of-the-art Equipment",
                "Specialized Training Zones",
                "Therapy & Relaxation Areas",
                "Premium Locker Rooms"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ArrowRight className="h-5 w-5 text-[#116DEC]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/video-tour')}
              className="mt-8 bg-[#116DEC] text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition group"
            >
              <Play className="h-5 w-5" />
              <span>Start Virtual Tour</span>
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={() => navigate('/video-tour')}
          >
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Gym Interior"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/90 p-4 rounded-full cursor-pointer hover:bg-white transition"
              >
                <Play className="h-12 w-12 text-[#116DEC]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}