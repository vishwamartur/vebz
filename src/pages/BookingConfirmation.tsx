import React from 'react';
import { Check, Calendar, Clock, IndianRupee } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BookingDetails {
  service: string;
  date: string;
  time: string;
  price: number;
  name: string;
  email: string;
  phone: string;
}

export default function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state?.booking as BookingDetails;

  if (!booking) {
    return (
      <main className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Booking Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We couldn't find your booking details. Please try booking again.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Return to Booking
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for booking your session. We've sent a confirmation email to {booking.email}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Booking Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service</h3>
                  <p className="text-gray-600 dark:text-gray-400">{booking.service}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Date</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">{booking.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Amount Paid</h3>
                    <p className="text-gray-600 dark:text-gray-400">₹{booking.price}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {booking.name}<br />
                    {booking.email}<br />
                    {booking.phone}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">What's Next?</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Check your email for detailed instructions</li>
                    <li>• Prepare any questions you have for the session</li>
                    <li>• Find a quiet, comfortable space for your session</li>
                    <li>• We'll send a reminder 24 hours before your session</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              View My Bookings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}