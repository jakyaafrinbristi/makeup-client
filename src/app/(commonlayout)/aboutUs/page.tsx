import React from "react";
import Image from "next/image";
import { Sparkles, Heart, Palette, Shield, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HomeAboutSection = () => {
  const highlights = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      text: "Premium Quality Products",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      text: "100% Cruelty Free",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      text: "Vibrant Color Selection",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      text: "Clean Ingredients",
    },
  ];

  return (
    <section className="py-12 bg-pink-50 dark:bg-pink-900/10">
      {/* Added div section */}
      <div className="container mx-auto px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 px-4 py-2 rounded-full mb-4">
          <Brush className="h-5 w-5" />
          <span className="font-medium">Our Philosophy</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Beauty With Purpose
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover makeup that cares for your skin while making you look fabulous
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image */}
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About our makeup brand"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-300 mb-4">
              Our Beauty Philosophy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2015, we believe makeup should enhance your natural beauty while being kind
              to your skin and the planet. Our cruelty-free, vegan formulas deliver stunning results
              without compromise.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-pink-500 dark:text-pink-400">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link href="/about">Our Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};