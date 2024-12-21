import React, { useState, useEffect } from 'react';
import './style.css'
const Carousel = ({autoSlide = true, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://file.hstatic.net/200000722513/file/thang_12_camp_tong_banner_web_slider_800x400.jpg',
     'https://file.hstatic.net/200000722513/file/thang_11_laptop_asus_rog800x400.jpg',
    'https://file.hstatic.net/200000722513/file/thang_12_laptop_msi_yep_24_gearvn_800x400_fe7bf7fd53c94a8f82c331cf534c35d3.png',
  ];
  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (

    <div className="carousel-container relative w-full max-w-1xl mx-auto mt-24">
      <div className="overflow-hidden relative h-[230px] md:h-[430px] rounded-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-fill" />
          </div>
        ))}
      </div>
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={nextSlide}
      >
        Next
      </button> */}
    </div>
  );
};

export default Carousel;

