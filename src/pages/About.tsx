import React from 'react';
import { Star, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="animated-bg bg-[url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80')] opacity-20 dark:opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Meet Vaibhavi
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your guide on the journey to spiritual enlightenment and personal transformation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1606314953317-8fca33c9f314?auto=format&fit=crop&q=80"
                alt="Vaibhavi's Journey"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  For over a decade, I've dedicated my life to understanding the mystical
                  arts of tarot reading and manifestation. My journey began during a
                  profound spiritual awakening that opened my eyes to the infinite
                  possibilities that lie within each of us.
                </p>
                <p>
                  Through years of study and practice, I've developed a unique approach
                  that combines ancient wisdom with modern manifestation techniques,
                  helping countless individuals unlock their true potential and manifest
                  their dreams into reality.
                </p>
                <p>
                  My mission is to guide you on your spiritual journey, helping you
                  discover your inner power and create the life you've always dreamed of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-purple-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">My Values</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The principles that guide my practice and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-6 h-6" />,
                title: 'Authenticity',
                description: 'Every reading and session is conducted with genuine care and spiritual connection.',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Empathy',
                description: 'Understanding and compassion are at the heart of every interaction.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Growth',
                description: 'Committed to supporting your personal and spiritual development journey.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}