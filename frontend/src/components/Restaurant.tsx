import React from 'react';
import { Clock, Award, Users } from 'lucide-react';

const Restaurant = () => {
  const menuItems = [
    {
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herbs and lemon',
      price: '$28',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Beef Tenderloin',
      description: 'Premium cut with red wine reduction',
      price: '$42',
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Lobster Risotto',
      description: 'Creamy arborio rice with fresh lobster',
      price: '$36',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="restaurant" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fine <span className="text-amber-600">Dining</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience culinary excellence with our award-winning restaurant
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Restaurant Interior"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Award-Winning Cuisine
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our master chefs create exceptional dishes using the finest ingredients. 
              From locally sourced produce to international delicacies, every meal is 
              a culinary journey you'll never forget.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Michelin Rated</h4>
                <p className="text-gray-600 text-sm">Award-winning cuisine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Open Daily</h4>
                <p className="text-gray-600 text-sm">6 AM - 11 PM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Private Dining</h4>
                <p className="text-gray-600 text-sm">Special occasions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;