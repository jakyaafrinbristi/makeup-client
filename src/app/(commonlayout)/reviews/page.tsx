/* eslint-disable react/no-unescaped-entities */
'use client';

import { useGetAllTestimonialsQuery } from '@/redux/features/testimonials/testimonialApi';
import { ITestimonial } from '@/Types/types';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Testimonial() {
  const { data, isLoading, refetch } = useGetAllTestimonialsQuery(undefined);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-dashed border-pink-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 bg-pink-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    );
  }

  const testimonials = data?.data?.slice(0, 5) || [];

  return (
    <div className="py-10 bg-pink-50 dark:bg-pink-950/20">
      <h2 className="text-3xl font-bold text-center text-pink-800 dark:text-pink-200 mb-8">
        💖 What Our Clients Say
      </h2>

      <Marquee speed={60} gradient={false} pauseOnHover>
        {testimonials.map((testimonial: ITestimonial) => (
          <div
            key={testimonial._id}
            className="group mx-3 bg-white dark:bg-pink-900/30 p-5 rounded-xl shadow-lg border border-pink-200 dark:border-pink-700 w-64 min-h-[280px] transition hover:scale-[1.02] hover:shadow-pink-200 flex flex-col justify-between items-center text-center"
          >
            {/* Avatar image inside the card */}
            <div className="relative w-16 h-16 rounded-full border-2 border-pink-300 shadow-md overflow-hidden bg-white mb-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>

            <h3 className="text-base font-semibold text-pink-800 dark:text-white">
              {testimonial.name}
            </h3>
            <p className="text-xs text-pink-700 dark:text-pink-100 mt-2 line-clamp-3">
              "{testimonial.message}"
            </p>

            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-xs ${
                    index < testimonial.rating
                      ? 'text-pink-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
