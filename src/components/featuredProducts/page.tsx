'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { IProduct } from "@/Types/types";
import Link from "next/link";
import { FiStar, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const FeaturedMakeup = () => {
  const { data, isLoading } = useGetAllProductQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-dashed border-pink-500/30 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-md animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const products = data?.data || [];

  return (
    <section className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 py-16 md:py-20 lg:py-24 bg-pink-50/50">
       <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 px-4 py-2 rounded-full mb-4">
          <FiStar className="h-5 w-5" />
          <span className="font-medium">Featured Products</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Our Top-Rated Makeup Picks
        </h2>
      
        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our premium makeup collection - a perfect blend of beauty, quality, and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product: IProduct) => (
          <Card 
            key={product._id}
            className="group relative overflow-hidden h-full flex flex-col bg-white border border-pink-100 hover:border-pink-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
              />
              <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {product.category}
              </div>
            </div>
            
            <div className="p-5 flex-grow flex flex-col">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-pink-500 text-sm mt-1">By {product.brand}</p>
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-2 mb-5">
                {product.description}
              </p>
              
              <div className="mt-auto flex justify-between items-center">
                <p className="font-bold text-lg text-pink-600">
                  ৳{product.price.toLocaleString()}
                </p>
                <Link href={`/products/${product._id}`}>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 flex items-center gap-1"
                  >
                    View <FiArrowRight className="text-sm" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/allProducts">
          <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 text-base font-medium rounded-lg shadow-md hover:shadow-pink-300/40 transition-all duration-300">
            Explore Full Collection
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedMakeup;