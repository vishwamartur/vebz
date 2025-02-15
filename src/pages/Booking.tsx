import React, { useState, useEffect } from 'react';
import { Calendar, Clock, IndianRupee, ArrowRight, QrCode, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendBookingConfirmation } from '../utils/email';

interface BookingSlot {
  date: string;
  time: string;
  available: boolean;
}

// Generate dynamic slots for the next 7 days
const generateAvailableSlots = () => {
  const slots: BookingSlot[] = [];
  const today = new Date();
  
  for (let i = 1; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Generate slots for each day (10 AM to 6 PM)
    for (let hour = 10; hour <= 18; hour += 2) {
      if (hour !== 14) { // Exclude 2 PM slot (lunch break)
        slots.push({
          date: date.toISOString().split('T')[0],
          time: `${hour}:00`,
          available: true,
        });
      }
    }
  }
  
  return slots;
};

const services = [
  {
    id: 'tarot',
    name: 'Tarot Reading',
    duration: '45 minutes',
    price: 1500,
    description: 'Personal tarot reading session with detailed card interpretation',
    features: [
      'In-depth card analysis',
      'Future insights',
      'Relationship guidance',
      'Career path reading',
      'Spiritual alignment'
    ]
  },
  {
    id: 'manifestation',
    name: 'Manifestation Coaching',
    duration: '60 minutes',
    price: 2000,
    description: 'One-on-one coaching to help you manifest your desires',
    features: [
      'Personal manifestation plan',
      'Law of attraction techniques',
      'Goal setting workshop',
      'Energy alignment',
      'Weekly follow-up'
    ]
  },
  {
    id: 'spiritual',
    name: 'Spiritual Guidance',
    duration: '50 minutes',
    price: 1800,
    description: 'Spiritual counseling and guidance for your life journey',
    features: [
      'Chakra balancing',
      'Meditation techniques',
      'Energy healing',
      'Life path guidance',
      'Spiritual practices'
    ]
  },
];

export default function Booking() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [availableSlots, setAvailableSlots] = useState<BookingSlot[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    setAvailableSlots(generateAvailableSlots());
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowQR(false);
    setPaymentError(null);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: BookingSlot) => {
    setSelectedSlot(slot);
    setShowQR(false);
    setPaymentError(null);
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];
    return availableSlots.filter(slot => slot.date === selectedDate);
  };

  const getUniqueDates = () => {
    const dates = [...new Set(availableSlots.map(slot => slot.date))];
    return dates.sort();
  };

  const initiateUPIPayment = async () => {
    const selectedServiceData = services.find(s => s.id === selectedService);
    if (!selectedServiceData || !selectedSlot) return;

    try {
      setIsProcessing(true);
      setPaymentError(null);

      // In production, this would make an API call to create a payment intent
      const upiUrl = `upi://pay?pa=vaibhavi@upi&pn=Vaibhavi%20Spiritual&am=${
        selectedServiceData.price
      }&cu=INR&tn=${encodeURIComponent(
        `Booking for ${selectedServiceData.name}`
      )}`;

      // Show QR code modal
      setShowQR(true);

      // Simulate payment verification
      // In production, this would be handled by webhooks
      const checkPaymentStatus = async () => {
        try {
          // Simulated success after 5 seconds
          await new Promise(resolve => setTimeout(resolve, 5000));
          
          // Send confirmation email
          const bookingDetails = {
            service: selectedServiceData.name,
            date: selectedSlot.date,
            time: selectedSlot.time,
            price: selectedServiceData.price,
            duration: selectedServiceData.duration,
            ...formData,
          };

          await sendBookingConfirmation(bookingDetails);
          
          setIsProcessing(false);
          navigate('/booking/confirmation', {
            state: {
              booking: bookingDetails,
            },
          });
        } catch (error) {
          console.error('Error processing booking:', error);
          setPaymentError('Failed to process booking. Please try again.');
          setIsProcessing(false);
        }
      };

      checkPaymentStatus();
    } catch (error) {
      console.error('Payment failed:', error);
      setPaymentError('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="animated-bg bg-[url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80')] opacity-20 dark:opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Book Your Session
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose your service, select a convenient time, and begin your spiritual journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Service Selection */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Select Your Service</h2>
              <div className="grid grid-cols-1 gap-6">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-6 rounded-xl text-left transition-all ${
                      selectedService === service.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-50 dark:bg-gray-800 hover:bg-purple-100'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-sm mb-3 opacity-90">{service.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <IndianRupee className="w-4 h-4" />
                            ₹{service.price}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            {selectedService && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Choose a Date</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {getUniqueDates().map((date) => (
                    <button
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedDate === date
                          ? 'border-purple-600 bg-purple-50 dark:bg-purple-900'
                          : 'border-gray-200 dark:border-gray-700 hover:border-purple-400'
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-medium">
                          {new Date(date).toLocaleDateString('en-US', {
                            weekday: 'short',
                          })}
                        </div>
                        <div className="text-2xl font-bold my-1">
                          {new Date(date).getDate()}
                        </div>
                        <div className="text-sm">
                          {new Date(date).toLocaleDateString('en-US', {
                            month: 'short',
                          })}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Time Slot Selection */}
            {selectedDate && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Choose a Time</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {getAvailableTimeSlots().map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotSelect(slot)}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedSlot === slot
                          ? 'border-purple-600 bg-purple-50 dark:bg-purple-900'
                          : 'border-gray-200 dark:border-gray-700 hover:border-purple-400'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        {slot.time}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {selectedSlot && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Special Notes or Questions (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Booking Summary */}
            {selectedService && selectedSlot && selectedServiceData && (
              <div className="bg-purple-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold mb-4">Booking Summary</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Service:</span>{' '}
                    {selectedServiceData.name}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{' '}
                    {new Date(selectedSlot.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> {selectedSlot.time}
                  </p>
                  <p>
                    <span className="font-medium">Duration:</span>{' '}
                    {selectedServiceData.duration}
                  </p>
                  <p>
                    <span className="font-medium">Amount:</span> ₹
                    {selectedServiceData.price}
                  </p>
                </div>
              </div>
            )}

            {/* Payment Section */}
            {selectedService && selectedSlot && formData.name && formData.email && formData.phone && (
              <div className="text-center">
                {paymentError && (
                  <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    {paymentError}
                  </div>
                )}

                <button
                  onClick={initiateUPIPayment}
                  disabled={isProcessing}
                  className={`inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors ${
                    isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isProcessing ? (
                    <>Processing Payment...</>
                  ) : (
                    <>Proceed to Payment <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>

                {showQR && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-md w-full mx-4">
                      <div className="text-center mb-6">
                        <QrCode className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                        <h3 className="text-xl font-bold mb-2">Scan to Pay</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Open your UPI app and scan this QR code to complete the payment
                        </p>
                      </div>
                      
                      {/* Placeholder for actual QR code */}
                      <div className="w-64 h-64 mx-auto bg-white p-4 rounded-lg mb-6">
                        <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                          QR Code
                        </div>
                      </div>

                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Amount to pay: ₹{selectedServiceData?.price}
                      </p>
                    </div>
                  </div>
                )}

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Secure payment powered by UPI
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}