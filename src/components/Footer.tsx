import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Vaibhavi
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Guiding you through life's journey with tarot and manifestation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">About</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Tarot Reading</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Manifestation Coaching</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Spiritual Guidance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Vaibhavi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}