import { Shield, Globe, Star, Users, Bed, Utensils, UsersRound, Building2 } from 'lucide-react';
import AboutUsImage from '../aboutusimage.png';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '25k+', label: 'Happy Guests' },
    { number: '50+', label: 'Luxury Rooms' },
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
  const services = [
    {
      icon: <Bed className="w-8 h-8" />,
      title: 'Rooms',
      description: 'Elegant and comfortable rooms designed for a relaxing stay'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Restuarant',
      description: 'Delight in a variety of cuisines served in a stylish dining atmosphere.'
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: 'Banquets',
      description: 'Spacious banquet halls perfect for weddings, parties, and events.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Roof Top Area',
      description: 'Enjoy panoramic city views with rooftop dining and entertainment'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-amber-600">Harsh Garden</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the story behind our commitment to exceptional hospitality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                For over ten years, Harsh Garden Hotel has been synonymous with luxury, 
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
                src={AboutUsImage}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className='text-center mb-8'>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience exceptional hospitality with stylish rooms, fine dining, elegant banquet spaces, and a scenic rooftop — all designed to make your stay unforgettable.
            </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;