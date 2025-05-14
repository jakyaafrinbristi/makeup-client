'use client';

import { useState } from 'react';
import { IProduct } from "@/Types/types";
import Link from 'next/link';
import Image from 'next/image';
import { useGetAllProductQuery } from '@/redux/features/product/productApi';

const CategorySection = () => {
  const { data: productResponse, isLoading, isError } = useGetAllProductQuery({});
  const allProducts = productResponse?.data || [];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = allProducts.filter((product: IProduct) => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  });

  const categories = ['All', 'Face', 'Eyes', 'Lips', 'Skin', 'Hair','Nails','Tools'];

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-3">Explore Our Makeup Collection</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find your beauty essentials. Filter by category to discover products for every look.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-6 py-2 rounded-full 
              font-medium text-sm
              transition-all duration-300
              shadow-sm
              border border-pink-100
              ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-pink-800 hover:bg-pink-50 hover:border-pink-200'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-600 mb-3"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center py-12 bg-red-50 rounded-lg">
          <p className="text-red-600">Error loading products. Please try again later.</p>
        </div>
      )}

      {/* Product Grid */}
      {!isLoading && !isError && (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No products found in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product: IProduct) => (
                <div 
                  key={product._id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={product.imageUrl || '/placeholder-image.jpg'} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      width={300}
                      height={200}
                      priority={false}
                    />
                    <span className="absolute top-3 right-3 bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-pink-600 font-bold">${product.price}</p>
                      <Link href={`/makeup/${product._id}`}>
                        <button className="text-pink-600 hover:text-pink-800 text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default CategorySection;
