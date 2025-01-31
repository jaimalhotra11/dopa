import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Body & Mind
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Join Dopamine Gym and experience fitness like never before
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-[#116DEC] px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/video-tour')}
              className="bg-white/10 backdrop-blur-lg border-2 border-white/20 px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#116DEC] transition flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Video</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}