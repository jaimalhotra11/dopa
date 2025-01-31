import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  }, [pathname]); // Runs every time the route changes

  return null; // No UI needed
};

export default AutoScrollToTop;
