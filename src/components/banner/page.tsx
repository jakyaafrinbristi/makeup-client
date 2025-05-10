'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="container mx-auto h-[700px] px-4 py-8 overflow-hidden mb-20"> 
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        }}
      >
        {/* Slide 1: Makeup Products */}
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1677350811721-4ff958ef5588?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Makeup Collection"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute z-20 text-white inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl font-bold mb-6 max-w-2xl drop-shadow-lg">Makeup Essentials</h2>
            <p className="text-xl mb-8 max-w-xl drop-shadow-lg">Discover your perfect look with our premium makeup collection</p>
            <Link href="/shop" className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
              Browse All Products
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2: Skincare Products */}
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1602532381225-eec578361933?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Skincare Solutions"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute z-20 text-white inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl font-bold mb-6 max-w-2xl drop-shadow-lg">Glow Naturally</h2>
            <p className="text-xl mb-8 max-w-xl drop-shadow-lg">Nourish your skin with our range of skincare products</p>
            <Link href="/shop" className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
              Browse Skincare
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3: Beauty Accessories */}
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1682087987464-51ba6adab1d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beauty Accessories"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute z-20 text-white inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl font-bold mb-6 max-w-2xl drop-shadow-lg">Beauty Accessories</h2>
            <p className="text-xl mb-8 max-w-xl drop-shadow-lg">Enhance your makeup routine with the best beauty tools</p>
            <Link href="/shop" className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
              Shop Accessories
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
