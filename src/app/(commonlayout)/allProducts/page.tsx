"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { IProduct } from "@/Types/types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetAllProductsPaginationQuery } from "@/redux/features/product/productApi";

export default function AllMakeupProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllProductsPaginationQuery({ 
    searchTerm, 
    category, 
    page, 
    limit: 6 
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-dashed border-pink-400/30 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-md animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const products = data?.data || [];
  const { totalPage } = data?.meta || { totalPage: 1 };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Discover Gorgeous Makeup Products
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-pink-200 max-w-3xl mx-auto">
          Unleash your beauty with our curated collection of premium makeup items.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search makeup..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Category
            </label>
            <select 
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              value={category} 
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
            >
              <option value="">All Categories</option>
              <option value="Face">Face</option>
              <option value="Eyes">Eyes</option>
              <option value="Lips">Lips</option>
              <option value="Skin">Skin</option>
              <option value="Hair">Hair</option>
              <option value="Hair">Nails</option>
              <option value="Hair">Tools</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          {products.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-gray-500 dark:text-gray-400">
                No makeup products found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product: IProduct) => (
                  <Card 
                    key={product._id}
                    className="group relative overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative w-full h-60 overflow-hidden">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{product.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">By {product.brand}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-5">
                        {product.description}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <p className="font-bold text-lg text-pink-600 dark:text-pink-400">
                          ${product.price.toLocaleString()}
                        </p>
                        <Link href={`/makeup/${product._id}`}>
                          <Button 
                            size="sm" 
                            className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-800"
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Showing page {page} of {totalPage}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="flex items-center gap-1 border-pink-600 text-pink-600 hover:bg-pink-50 dark:border-pink-500 dark:text-pink-500 dark:hover:bg-pink-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft className="text-sm" /> Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={page === totalPage}
                    onClick={() => setPage(page + 1)}
                    className="flex items-center gap-1 border-pink-600 text-pink-600 hover:bg-pink-50 dark:border-pink-500 dark:text-pink-500 dark:hover:bg-pink-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next <FiChevronRight className="text-sm" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
