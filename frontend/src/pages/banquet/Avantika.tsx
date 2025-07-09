import React from 'react';
import { Users, Calendar, MapPin, Clock, Monitor, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const Awantika = () => {
  const features = [
    {
      title: 'Professional AV Setup',
      description: 'State-of-the-art presentation equipment',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: 'High-Speed WiFi',
      description: 'Reliable internet for all your needs',
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: 'Conference Setup',
      description: 'Perfect for business meetings and seminars',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Catering Kitchen',
      description: 'Professional kitchen for food preparation',
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const gallery = [
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Awantika <span className="text-amber-400">Venue</span></h1>
            <p className="text-xl">Perfect for business events and corporate gatherings</p>
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
                Avantika is our modern business venue, designed specifically for corporate events, 
                conferences, and professional gatherings. With a capacity of 100+ guests, this 
                sophisticated space features state-of-the-art AV equipment, high-speed WiFi, 
                and a professional conference setup. Perfect for business meetings, seminars, 
                and corporate celebrations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-amber-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-semibold">100+ Guests</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Venue Features</h2>
            <p className="text-xl text-gray-600">Everything you need for a successful business event</p>
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
            Contact us today to check availability and start planning your perfect business event at Avantika
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

export default Awantika; 