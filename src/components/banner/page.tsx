'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Makeup Revolution",
      description: "Craft your signature look with our luxury cosmetics",
      buttonText: "Explore Collection",
      imageUrl: "https://plus.unsplash.com/premium_photo-1677350811721-4ff958ef5588?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/allProducts",
      overlay: "bg-gradient-to-br from-purple-900/60 via-pink-800/40 to-transparent"
    },
    {
      id: 2,
      title: "Skin Nirvana",
      description: "Clinical-grade skincare for radiant transformation",
      buttonText: "Discover Formulas",
      imageUrl: "https://images.unsplash.com/photo-1602532381225-eec578361933?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/allProducts",
      overlay: "bg-gradient-to-bl from-blue-900/60 via-teal-800/40 to-transparent"
    },
    {
      id: 3,
      title: "Tools of Artistry",
      description: "Precision instruments for flawless application",
      buttonText: "View Tools",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661776604037-12e9654d5ab6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/allProducts",
      overlay: "bg-gradient-to-tr from-amber-900/60 via-rose-800/40 to-transparent"
    }
  ];

  return (
    <div className="relative w-full h-[85vh] max-h-[900px] min-h-[550px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Elegant Overlay */}
            <div className={`absolute inset-0 ${slide.overlay} z-10`}></div>
            
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')]"></div>
            
            {/* Background Image */}
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={slide.id === 1}
              sizes="100vw"
            />
            
            {/* Content Container */}
            <div className="absolute z-20 text-white inset-0 flex items-center justify-center">
              <div className="text-center px-6 max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                    {slide.title}
                  </h2>
                  <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fadeInUp delay-100">
                    {slide.description}
                  </p>
                </div>
                
                <Link
                  href={slide.link}
                  className="inline-block relative group animate-fadeInUp delay-200"
                >
                  <span className="relative z-10 px-8 py-3 text-lg font-medium bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300">
                    {slide.buttonText}
                  </span>
                  <span className="absolute -inset-2 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-md transition-all duration-300 animate-pulse-slow"></span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Modern Pagination */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white cursor-pointer transition-all duration-300 hover:scale-150"
            aria-label={`Go to slide ${slide.id}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;