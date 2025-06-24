import React from 'react';
import { Wifi, Car, Coffee, Utensils, Star } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      price: '$299',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Free WiFi', 'Parking', 'Breakfast', 'Room Service'],
      rating: 4.8,
      description: 'Spacious suite with city views and modern amenities'
    },
    {
      id: 2,
      name: 'Executive Room',
      price: '$199',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Free WiFi', 'Parking', 'Breakfast'],
      rating: 4.6,
      description: 'Perfect for business travelers with work desk'
    },
    {
      id: 3,
      name: 'Standard Room',
      price: '$129',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      amenities: ['Free WiFi', 'Breakfast'],
      rating: 4.4,
      description: 'Comfortable room with all essential amenities'
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Free WiFi':
        return <Wifi className="w-4 h-4" />;
      case 'Parking':
        return <Car className="w-4 h-4" />;
      case 'Breakfast':
        return <Coffee className="w-4 h-4" />;
      case 'Room Service':
        return <Utensils className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Rooms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of beautifully appointed rooms and suites
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              style={{ animationDelay: `${index * 200}ms` }}
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
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;