import React from 'react';
import { motion } from 'framer-motion';

const VideoTour = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Virtual Tour</h1>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <video
              className="w-full h-[600px] object-cover"
              controls
              playsInline
            >
              <source src="./assets/images/virtualtour.mp4" type="video/mp4" />
              
            </video>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Experience our world-class facilities and equipment through this virtual tour.
              Get a glimpse of what makes Dopamine Gym special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTour;