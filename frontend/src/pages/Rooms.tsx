import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

import { Wifi, Car, Coffee, Utensils, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Room1 from '../Room1.jpg';
import Room2 from '../Room2.jpg';
import Room3 from '../Room3.jpg';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      price: '₹3000/3500',
      image: Room2,
      amenities:['Free WiFi', 'Parking', 'In-Room Dinning', 'Room Service'],
      rating: 4.9,
      description: 'Ultimate luxury with panoramic city views and premium amenities',
      size: '120 sqm'
    },
    {
      id: 2,
      name: 'Executive Room',
      price: '₹4000/4500',
      image: Room3,
      amenities: ['Free WiFi', 'Parking', 'In-Room Dinning', 'Room Service'],
      rating: 4.8,
      description: 'Spacious suite with modern amenities and elegant design',
      size: '80 sqm'
    },
    {
      id: 3,
      name: 'Premium Room',
      price: '₹5000/5500',
      image: Room1,
      amenities: ['Free WiFi', 'Parking', 'In-Room Dinning', 'Room Service'],
      rating: 4.6,
      description: 'Perfect for business travelers with dedicated workspace',
      size: '45 sqm'
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Free WiFi':
        return <Wifi className="w-4 h-4" />;
      case 'Parking':
        return <Car className="w-4 h-4" />;
      case 'In-Room Dinning':
        return <Coffee className="w-4 h-4" />;
      case 'Room Service':
        return <Utensils className="w-4 h-4" />;
        case 'Mineral Water':
          return <Star className='w-4 h-4' />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    eventType: '',
    message: ''
  });

  const [formType, setFormType] = useState<'booking' | 'event' | 'general'>('booking');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

 const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 8873291214 (For Hotel & Banquet)', '+91 7209291214 (For Restaurant)']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['hotelharshgardens@gmail.com']
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['Ward no. 2, NH 31, Singhaul Dih, Begusarai, Bihar 851101']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['24/7 Reception', 'Concierge Available']
    }
  ];

  const roomTypes = [
    'Standard Room',
    'Executive Room',
    'Deluxe Suite',
    'Presidential Suite',
    'Family Suite',
    'Garden View Room'
  ];

  const eventTypes = [
    'Wedding Ceremony',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Conference',
    'Other'
  ];
  return (
    <div className="pt-20 min-h-screen">
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Rooms</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto">
             <h2> Choose from our selection of beautifully appointed rooms and suites. Our hotel offers three room types to suit every need: the Basic Room provides compact comfort with a queen bed and shower, perfect for budget-conscious travelers; the Normal Room adds more space with a king bed, sitting area, and shower/tub combo for enhanced relaxation; while the Deluxe Room delivers luxury with premium amenities, a soaking tub, and breathtaking views for those seeking indulgence.</h2>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-semibold">{room.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.size}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600">{room.price}</span>
                      <span className="text-gray-500 text-sm block">per night</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 block text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                    <div className="space-y-6 mb-8">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="text-amber-600">
                              {info.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
      
                    {/* Quick Contact */}
                    <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                      <div className="space-y-3">
                        <a href="tel:+15551234567" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors">
                          <Phone className="w-5 h-5" />
                          <span>Call us now: +91 8873291214 / +91 7209291214</span>
                        </a>
                        <a href="mailto:info@luxuria.com" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors">
                          <Mail className="w-5 h-5" />
                          <span>Email: hotelharshgardens@gmail.com</span>
                        </a>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <MessageCircle className="w-5 h-5" />
                          <span>Live Chat Available 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* Contact Form */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    
                    {/* Form Type Selector */}
                    <div className="flex space-x-4 mb-6">
                      <button
                        onClick={() => setFormType('booking')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          formType === 'booking' 
                            ? 'bg-amber-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Room Booking
                      </button>
                      <button
                        onClick={() => setFormType('event')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          formType === 'event' 
                            ? 'bg-amber-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Event Inquiry
                      </button>
                      <button
                        onClick={() => setFormType('general')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          formType === 'general' 
                            ? 'bg-amber-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        General
                      </button>
                    </div>
      
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
      
                      {formType === 'booking' && (
                        <>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                                Check-in Date
                              </label>
                              <input
                                type="date"
                                id="checkIn"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                              />
                            </div>
                            <div>
                              <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                                Check-out Date
                              </label>
                              <input
                                type="date"
                                id="checkOut"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                              />
                            </div>
                          </div>
      
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Guests
                              </label>
                              <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                              >
                                <option value="">Select guests</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4+ Guests</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                                Room Type
                              </label>
                              <select
                                id="roomType"
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                              >
                                <option value="">Select room type</option>
                                {roomTypes.map((type) => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </>
                      )}
      
                      {formType === 'event' && (
                        <div>
                          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                            Event Type
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select event type</option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      )}
      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          {formType === 'booking' ? 'Special Requests' : 'Message'}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder={
                            formType === 'booking' 
                              ? "Any special requests or requirements..." 
                              : "Tell us more about your inquiry..."
                          }
                        ></textarea>
                      </div>
      
                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>
                          {formType === 'booking' ? 'Send Booking Request' : 
                           formType === 'event' ? 'Send Event Inquiry' : 'Send Message'}
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Rooms;