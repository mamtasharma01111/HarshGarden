import React from 'react';
import { Users, Calendar, MapPin, Clock, Home, Speaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mithla = () => {
  const features = [
    {
      title: 'Intimate Setting',
      description: 'Perfect for small gatherings and private events',
      icon: <Home className="w-6 h-6" />
    },
    {
      title: 'Elegant Décor',
      description: 'Tastefully decorated for a sophisticated ambiance',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Air Conditioning',
      description: 'Comfortable climate-controlled environment',
      icon: <Speaker className="w-6 h-6" />
    },
    {
      title: 'Modern Sound System',
      description: 'High-quality audio for speeches and music',
      icon: <Speaker className="w-6 h-6" />
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1509228468518-180dd4864904',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Mithla <span className="text-amber-400">Banquet</span></h1>
            <p className="text-xl">Cozy indoor banquet for intimate celebrations</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Banquet Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                Mithla is our small, elegant indoor banquet, ideal for private parties, family functions, and business meetings. 
                With a capacity of up to 100 guests, this cozy space features tasteful décor, air conditioning, and a modern sound system. 
                Enjoy a comfortable and exclusive environment for your special occasions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-amber-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-semibold">100 Guests</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-amber-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">4-8 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 4).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Banquet Features</h2>
            <p className="text-xl text-gray-600">Everything you need for a perfect indoor event</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-amber-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and start planning your perfect indoor event at Mithla
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mithla; 