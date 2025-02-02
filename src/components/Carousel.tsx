import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import doctor from "../assets/images/doctor.jpg";
import marathon from "../assets/images/marathon.jpg";

const images = ['assets/images/doctor.jpg', 'assets/images/marathon.jpg'];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto h-[800px]"> {/* Increased container size */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-lg shadow-lg h-full w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center h-full">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-contain rounded-lg" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
