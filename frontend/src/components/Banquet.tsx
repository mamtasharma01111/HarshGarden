import React from 'react';
import { Users, Calendar, Sparkles, Heart } from 'lucide-react';

const Banquet = () => {
  const events = [
    {
      title: 'Wedding Ceremonies',
      description: 'Make your special day unforgettable with our elegant wedding packages',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Corporate Events',
      description: 'Professional venues for conferences, meetings, and corporate gatherings',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Social Celebrations',
      description: 'Birthday parties, anniversaries, and milestone celebrations',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  const features = [
    { title: 'Grand Ballroom', capacity: '500 guests', description: 'Elegant space for large celebrations' },
    { title: 'Garden Pavilion', capacity: '200 guests', description: 'Outdoor venue with natural beauty' },
    { title: 'Executive Hall', capacity: '100 guests', description: 'Perfect for business events' },
  ];

  return (
    <section id="banquet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event <span className="text-amber-600">Spaces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create unforgettable memories in our sophisticated event venues
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="text-amber-600">
                    {event.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Venues</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-amber-600 font-semibold mb-2">{feature.capacity}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Plan Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banquet;