'use client';

import Image from 'next/image';

const allPosts = [
  {
    title: "Makeup Trends 2024",
    excerpt: "Discover the hottest makeup trends taking over this year.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1470&auto=format&fit=crop",
    date: "May 15, 2024",
    category: "Trends",
  },
  {
    title: "Skincare Routine for Summer",
    excerpt: "Keep your skin glowing all summer with these essential tips.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1587&auto=format&fit=crop",
    date: "April 28, 2024",
    category: "Skincare",
  },
  {
    title: "Natural Beauty Hacks",
    excerpt: "Try these easy and effective beauty hacks at home.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1470&auto=format&fit=crop",
    date: "March 12, 2024",
    category: "Tips",
  },
  {
    title: "Night-Time Skincare Routine",
    excerpt: "End your day with these calming and effective skincare rituals.",
    image: "https://images.unsplash.com/photo-1588776814546-ec7b5f3cc6d0?q=80&w=1470&auto=format&fit=crop",
    date: "February 25, 2024",
    category: "Routine",
  },
];

const BlogPage = () => {
  return (
    <main className="container mx-auto bg-pink-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-900">All Blog Posts</h1>
          <p className="text-pink-600 mt-4 text-lg">
            Tips, tutorials, and trends to help you shine every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full inline-block mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-pink-900">{post.title}</h2>
                <p className="text-sm text-pink-700 mt-2">{post.excerpt}</p>
                <div className="mt-4 text-sm text-pink-500">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
