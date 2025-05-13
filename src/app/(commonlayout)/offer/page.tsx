/* eslint-disable react/no-unescaped-entities */
// components/sections/OfferSection.tsx
"use client"
import React, { useState, useEffect } from "react";
import { Clock, Tag, Gift, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const OfferSection = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  // Special offers data
  const offers = [
    {
      id: 1,
      title: "Lipstick Bundle",
      description: "3 premium matte lipsticks + free lip liner",
      originalPrice: "$45",
      offerPrice: "$29",
      discount: "35% OFF",
      image: "https://images.unsplash.com/photo-1617422275558-e5f616302690?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      limited: true,
    },
    {
      id: 2,
      title: "Skincare Set",
      description: "Complete 5-step routine for glowing skin",
      originalPrice: "$78",
      offerPrice: "$55",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1631447661435-b86ae5ecd564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Makeup Palette",
      description: "18-shade eyeshadow & blush combo",
      originalPrice: "$38",
      offerPrice: "$25",
      discount: "34% OFF",
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bestseller: true,
    },
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = { ...prev };
        
        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 mt-12 bg-gradient-to-b from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 px-4 py-2 rounded-full mb-4">
            <Gift className="h-5 w-5" />
            <span className="font-medium">Special Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Don't Miss These Beauty Deals!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Limited-time offers on our best-selling products. Shop now before they're gone!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-6">
            <div className="flex items-center gap-2 text-pink-500 dark:text-pink-400">
              <Clock className="h-6 w-6" />
              <span className="font-medium">Offer ends in:</span>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">HOURS</div>
              </div>
              <div className="text-2xl text-gray-900 dark:text-white">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">MINUTES</div>
              </div>
              <div className="text-2xl text-gray-900 dark:text-white">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">SECONDS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {/* Badges */}
              {offer.limited && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                  <AlertTriangle className="h-3 w-3" />
                  LIMITED
                </div>
              )}
              {offer.bestseller && (
                <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                  BESTSELLER
                </div>
              )}
              
              {/* Discount Tag */}
              <div className="absolute top-4 right-4 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                <Tag className="h-3 w-3" />
                {offer.discount}
              </div>

              {/* Product Image - Using Next.js Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {offer.description}
                </p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                    {offer.offerPrice}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    {offer.originalPrice}
                  </span>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                >
                  <Link href={`/products/${offer.id}`}>
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            className="border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20"
          >
            <Link href="/all-products">
              View All Offers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;