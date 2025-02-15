import React from 'react';
import { Star, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Tarot Reading',
      description: 'Gain deep insights into your life path and receive guidance for important decisions through personalized tarot readings.',
      price: '₹1,500',
      duration: '45 minutes',
      features: [
        'In-depth card interpretation',
        'Spiritual guidance',
        'Future insights',
        'Relationship analysis',
        'Career guidance'
      ],
      icon: <Star className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1632244123101-b4e34ae1e141?auto=format&fit=crop&q=80'
    },
    {
      title: 'Manifestation Coaching',
      description: "Learn powerful techniques to manifest your desires and create the life you have always dreamed of through personalized coaching sessions.",
      price: '₹2,000',
      duration: '60 minutes',
      features: [
        'Personal manifestation plan',
        'Law of attraction techniques',
        'Mindset transformation',
        'Goal setting workshop',
        'Weekly accountability'
      ],
      icon: <Sparkles className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&q=80'
    },
    {
      title: 'Spiritual Guidance',
      description: 'Embark on a transformative journey of self-discovery and spiritual growth with personalized guidance and support.',
      price: '₹1,800',
      duration: '50 minutes',
      features: [
        'Energy healing',
        'Meditation techniques',
        'Chakra balancing',
        'Spiritual counseling',
        'Personal rituals'
      ],
      icon: <Heart className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 dark:opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Spiritual Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your life with personalized spiritual guidance and manifestation coaching
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 items-center bg-purple-50 dark:bg-gray-800 rounded-2xl p-8"
              >
                <div className="w-full lg:w-1/3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
                
                <div className="w-full lg:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-serif font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2">Session Details:</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Duration: {service.duration}<br />
                        Price: {service.price}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Includes:</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-purple-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Book Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 dark:bg-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards spiritual enlightenment and personal growth.
            Book your session today and begin your transformative journey.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}