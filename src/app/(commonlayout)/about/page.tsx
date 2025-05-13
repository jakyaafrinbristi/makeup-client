import React from "react";
import Image from "next/image";
import { Award, Heart, Palette, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Premium Products" },
    { value: "100%", label: "Cruelty Free" },
    { value: "5★", label: "Customer Rating" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Professional makeup artist with 15 years experience in the beauty industry.",
      image: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Chen",
      role: "Product Developer",
      bio: "Cosmetic chemist specializing in clean, high-performance formulations.",
      image: "https://images.unsplash.com/photo-1691389658453-e67b7c823549?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Priya Patel",
      role: "Customer Experience",
      bio: "Beauty enthusiast dedicated to helping you find your perfect products.",
      image: "https://images.unsplash.com/photo-1630631729332-d564de91400f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Quality First",
      description: "We source only the highest quality ingredients from ethical suppliers.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Expression",
      description: "Makeup is art - we celebrate all forms of beauty and self-expression.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Clean Beauty",
      description: "All products are free from parabens, sulfates, and harmful chemicals.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cruelty Free",
      description: "Never tested on animals - we're Leaping Bunny certified.",
    },
  ];

  return (
    <div className="bg-pink-50 dark:bg-pink-900/10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 dark:text-pink-300 mb-6 animate-fade-in">
            Our Beauty Story
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Empowering your unique beauty since 2015 with clean, cruelty-free cosmetics that perform.
          </p>
          <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
            <Link href="/allProducts">Shop Our Collection</Link>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-pink-50 dark:bg-pink-900/10 clip-path-wave"></div>
      </section>

      {/* Our Story */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://images.unsplash.com/photo-1736167442640-1988e440297c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our makeup store"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-300 mb-6">
              From Passion to Palette
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What began as a small boutique in downtown Seattle has blossomed into a beloved beauty destination. 
              Our founder, Sarah Johnson, started Makeup Store with a simple mission: to provide high-performance 
              cosmetics without compromising ethics or the environment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Today, we arere proud to be a woman-owned business serving beauty lovers worldwide with our 
              carefully curated selection of clean, vegan, and cruelty-free products.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center hover:scale-105 transition-transform"
                >
                  <p className="text-2xl font-bold text-pink-500 dark:text-pink-400">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-pink-600 dark:text-pink-300 mb-16">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-pink-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-pink-500 dark:text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 dark:text-pink-300 mb-16">
          The Faces Behind the Brand
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-pink-500 dark:text-pink-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <Award className="h-12 w-12 mx-auto text-pink-500 dark:text-pink-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-300 mb-6">
            Join Our Beauty Community
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Discover your signature look with products that love your skin as much as you do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link href="/allProducts">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/50">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;