import React from 'react';
import { Sparkles, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="animated-bg bg-[url('https://images.unsplash.com/photo-1603644448048-73df40eda47e?auto=format&fit=crop&q=80')] opacity-20 dark:opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Manifest Your Dreams
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Through Spiritual Guidance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock your potential and transform your life with personalized tarot readings
              and manifestation coaching.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Spiritual Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover your path to spiritual enlightenment and personal growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tarot Reading',
                description: 'Gain clarity and insights into your life\'s journey through personalized tarot readings.',
                icon: <Star className="w-6 h-6" />,
              },
              {
                title: 'Manifestation Coaching',
                description: 'Learn powerful techniques to manifest your desires and create the life you dream of.',
                icon: <Sparkles className="w-6 h-6" />,
              },
              {
                title: 'Spiritual Guidance',
                description: 'Receive guidance and support on your spiritual journey towards self-discovery.',
                icon: <Star className="w-6 h-6" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-purple-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 dark:text-purple-400 font-medium flex items-center gap-2 hover:text-purple-700"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}