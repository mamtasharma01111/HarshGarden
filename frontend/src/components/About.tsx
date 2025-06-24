import React from 'react';
import { Shield, Globe, Star, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '10k+', label: 'Happy Guests' },
    { number: '150+', label: 'Luxury Rooms' },
    { number: '24/7', label: 'Concierge Service' }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every detail of your stay'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust',
      description: 'Your comfort and security are our top priorities'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Hospitality',
      description: 'Warm service that makes you feel at home'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building connections and lasting memories'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-amber-600">Luxuria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the story behind our commitment to exceptional hospitality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              For over two din decades, Luxuria Hotel has been synonymous with luxury, 
              comfort, and exceptional service. Located in the heart of the city, 
              we have welcomed guests from around the world, creating memorable 
              experiences that last a lifetime.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our commitment to excellence extends beyond beautiful accommodations 
              to encompass every aspect of your stay, from our award-winning restaurant 
              to our state-of-the-art event facilities.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Hotel Lobby"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-amber-600 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;