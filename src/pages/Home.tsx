import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Facilities from '../components/Facilities';
import VirtualTour from '../components/VirtualTour';
import TrainerSection from '../components/TrainerSection';
import ClassSchedule from '../components/ClassSchedule';
import SuccessStories from '../components/SuccessStories';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Facilities />
      <Carousel />
      <TrainerSection />
      <VirtualTour />
      <ClassSchedule />
      <SuccessStories />
    </div>
  );
};

export default Home;