import React from 'react';
import { Users, Calendar, MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwadhHall = () => {
  const features = [
    {
      title: 'Elegant Crystal Chandeliers',
      description: 'Beautiful lighting that creates a magical atmosphere',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Spacious Dance Floor',
      description: 'Perfect for celebrations and entertainment',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Professional Stage',
      description: 'Ideal for performances and ceremonies',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'VIP Area',
      description: 'Exclusive space for special guests',
      icon: <Star className="w-6 h-6" />
    }
  ];

  const gallery = [
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg'
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Awadh <span className="text-amber-400">Hall</span></h1>
            <p className="text-xl">Elegant space for large celebrations</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Venue Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                Harsh Garden is our premier venue, perfect for grand celebrations and large gatherings. 
                With a capacity of up to 500+ guests, this elegant space features crystal chandeliers, 
                a spacious dance floor, and a professional stage. The venue combines luxury with 
                functionality, making it ideal for weddings, corporate events, and social celebrations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-amber-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-semibold">500+ Guests</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-amber-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">6-10 Hours</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Venue Features</h2>
            <p className="text-xl text-gray-600">Everything you need for a perfect event</p>
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
            Contact us today to check availability and start planning your perfect event at Harsh Garden
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

export default AwadhHall; 