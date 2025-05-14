'use client';

import Link from 'next/link';
import Image from 'next/image';

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Makeup Trends 2024",
      excerpt: "Discover the hottest makeup trends taking over this year",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 15, 2024",
      category: "Trends"
    },
    {
      id: 2,
      title: "Skincare Routine for Summer",
      excerpt: "Keep your skin glowing all summer with these essential tips",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 28, 2024",
      category: "Skincare"
    }
  ];

  return (
    <section className="bg-pink-50 py-16 px-4 container mx-auto sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-4">
            Beauty Blog
          </h2>
          <p className="text-lg text-pink-700 max-w-2xl mx-auto">
            Discover tips, trends and tutorials from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/70 to-transparent p-4">
                  <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-pink-800 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-pink-500">{post.date}</span>
                
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;