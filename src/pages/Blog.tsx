import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: 'Understanding the Major Arcana: A Deep Dive',
      excerpt: 'Explore the profound symbolism and meanings behind the Major Arcana cards in Tarot, and how they guide our spiritual journey.',
      image: 'https://images.unsplash.com/photo-1633098216394-b48cc60e9a90?auto=format&fit=crop&q=80',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Tarot',
    },
    {
      title: 'Manifestation Techniques for Beginners',
      excerpt: 'Learn the fundamental principles and practical techniques to start your manifestation journey and attract your desires.',
      image: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&q=80',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Manifestation',
    },
    {
      title: 'The Power of Moon Phases in Spiritual Practice',
      excerpt: 'Discover how to align your spiritual practices with lunar cycles to enhance your manifestation and personal growth.',
      image: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&q=80',
      date: 'March 5, 2024',
      readTime: '7 min read',
      category: 'Spiritual Growth',
    },
    {
      title: 'Creating Sacred Space: A Guide to Home Altars',
      excerpt: 'Learn how to create and maintain a personal altar that enhances your spiritual practice and manifestation work.',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80',
      date: 'March 1, 2024',
      readTime: '5 min read',
      category: 'Spiritual Practice',
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 dark:opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Spiritual Insights & Guidance
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore articles on tarot, manifestation, and spiritual growth to deepen your practice
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-purple-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-purple-600 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold mb-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-600 dark:bg-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest articles, spiritual insights, and exclusive offers.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}