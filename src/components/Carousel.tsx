import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import projects from "../data/projects";
import getProjectImageURL from "../utils/image-project-util";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  activeIndex: number;
  onSlideChange: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ activeIndex, onSlideChange }) => {
  // This matches your original working implementation
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Navigate to the clicked slide
    } else {
      console.error("Swiper instance is not available");
    }
  };

  return (
    <div className="carousel-container relative">
      <Swiper
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
        className="mySwiper"
        initialSlide={activeIndex}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div
              className="bg-gray-100 bg-opacity-40 hover:bg-pink-200/40 transition-colors duration-300 overflow-hidden shadow-md flex items-center justify-center p-2 h-[25vh] w-full cursor-pointer"
              onClick={() => handleSlideClick(index)}
            >
              <img
                src={getProjectImageURL(project.image)}
                alt={project.name}
                width="200"
                height="150"
                loading="lazy"
                className="h-[25vh] w-auto object-contain"
              />
            </div>
            <p className="mt-2 opacity-0">.</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
