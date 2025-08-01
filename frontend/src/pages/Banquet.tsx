import { Users, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import BridalImage from '../assets/Banquet/BridalImage.jpg';
import CorporateMeeting from '../assets/Banquet/corprateMeeting.jpeg';
import PartyVibe from '../assets/Banquet/PartyVibe.jpeg';
import Background from '../assets/Banquet/BackgroundImage.jpg';

const Banquet = () => {
  const events = [
    {
      title: 'Wedding Ceremonies',
      description: 'Make your special day unforgettable with our elegant wedding packages',
      image: BridalImage,
      icon: <Heart className="w-8 h-8" />,
      features: ['Bridal Suite', 'Floral Arrangements', 'Photography', 'Catering']
    },
    {
      title: 'Corporate Events',
      description: 'Professional venues for conferences, meetings, and corporate gatherings',
      image: CorporateMeeting,
      icon: <Users className="w-8 h-8" />,
      features: ['AV Equipment', 'WiFi', 'Catering', 'Parking']
    },
    {
      title: 'Social Celebrations',
      description: 'Birthday parties, anniversaries, and milestone celebrations',
      image: PartyVibe,
      icon: <Sparkles className="w-8 h-8" />,
      features: ['Decorations', 'Entertainment', 'Custom Menu', 'Photography']
    }
  ];

  const venues = [
    { 
      title: 'Awadh Hall', 
      capacity: '500+ guests', 
      description: 'Elegant space for large celebrations',
      image: BridalImage,
      features: ['Crystal Chandeliers', 'Dance Floor', 'Stage', 'VIP Area']
    },
    { 
      title: 'Mithilla', 
      capacity: '200+ guests', 
      description: 'Outdoor venue with natural beauty',
      image: PartyVibe,
      features: ['Garden Views', 'Natural Lighting', 'Gazebo', 'Water Features']
    },
    { 
      title: 'Awantika', 
      capacity: '100+ guests', 
      description: 'Perfect for business events',
      image: CorporateMeeting,
      features: ['Presentation Screen', 'Conference Setup', 'WiFi', 'Catering Kitchen']
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url(${Background})`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Event <span className="text-amber-400">Spaces</span></h1>
            <p className="text-xl">Create unforgettable memories in our sophisticated event venues</p>
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Occasion</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have the perfect space for your event
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
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Venues */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Venues</h2>
            <p className="text-xl text-gray-600">Choose the perfect setting for your special event</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {venues.map((venue, index) => (
              <Link
                key={index}
                to={`/banquet/${venue.title.toLowerCase().replace(/\s+/g, '')}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{venue.title}</h3>
                    <div className="flex items-center text-amber-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">{venue.capacity}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{venue.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {venue.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banquet;