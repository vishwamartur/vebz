import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 5,
      service: 'Tarot Reading',
      text: 'Vaibhavi\'s tarot reading was incredibly accurate and insightful. She provided clarity during a difficult time in my life and helped me make important decisions with confidence.',
      date: 'October 2023'
    },
    {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 5,
      service: 'Manifestation Coaching',
      text: 'The manifestation coaching sessions transformed my approach to achieving my goals. Within months, I saw significant positive changes in both my career and personal life.',
      date: 'September 2023'
    },
    {
      name: 'Emma Davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 5,
      service: 'Spiritual Guidance',
      text: 'Vaibhavi has a true gift for spiritual guidance. Her sessions helped me connect with my higher self and find inner peace during a challenging period of transition.',
      date: 'November 2023'
    },
    {
      name: 'David Wilson',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      rating: 5,
      service: 'Tarot Reading',
      text: 'The accuracy of Vaibhavi\'s readings is remarkable. She provided insights that helped me navigate complex relationships and career decisions with clarity.',
      date: 'October 2023'
    }
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 dark:opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Read about the transformative experiences of those who have embarked on their spiritual journey with Vaibhavi
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-200 dark:text-gray-700" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 text-sm">
                      {testimonial.service}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {testimonial.text}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 dark:bg-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our community of transformed lives. Book your session today and start your path to spiritual enlightenment.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
          >
            Book Your Session <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}