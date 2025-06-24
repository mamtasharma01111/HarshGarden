import { Clock, Award, Users, ChefHat } from 'lucide-react';

const banner = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb';
const restaurantImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';

const Restaurant = () => {
  const menuCategories = [
    {
      name: 'Starter',
      items: [
        {
          name: 'Truffle Arancini',
          description: 'Crispy risotto balls with black truffle and parmesan',
          price: '₹450',
          image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Seared Scallops',
          description: 'Pan-seared scallops with cauliflower puree',
          price: '₹499',
          image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Main Courses',
      items: [
        {
          name: 'Grilled Salmon',
          description: 'Fresh Atlantic salmon with herbs and lemon',
          price: '₹650',
          image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Beef Tenderloin',
          description: 'Premium cut with red wine reduction',
          price: '₹450',
          image: 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Lobster Risotto',
          description: 'Creamy arborio rice with fresh lobster',
          price: '₹450',
          image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Desserts',
      items: [
        {
          name: 'Chocolate Soufflé',
          description: 'Rich dark chocolate with vanilla ice cream',
          price: '₹650',
          image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Crème Brûlée',
          description: 'Classic French custard with caramelized sugar',
          price: '₹500',
          image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    }
  ];

  const chefs = [
    {
      name: 'Chef Marcus Laurent',
      title: 'Executive Chef',
      image: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Michelin-starred chef with 20+ years of experience'
    },
    {
      name: 'Chef Isabella Rodriguez',
      title: 'Pastry Chef',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Award-winning pastry chef specializing in French desserts'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-6xl font-extrabold mb-4 drop-shadow-xl tracking-wide">
              Fine <span className="text-amber-400">Dining</span>
            </h1>
            <p className="text-xl">Experience culinary excellence with our award-winning restaurant</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Award-Winning Cuisine</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our master chefs create exceptional dishes using the finest ingredients. From locally sourced produce to international delicacies, every meal is a culinary journey you'll never forget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[{
                  icon: <Award className="w-8 h-8 text-amber-600" />, title: 'Michelin Rated', desc: 'Award-winning cuisine'
                }, {
                  icon: <Clock className="w-8 h-8 text-amber-600" />, title: 'Open Daily', desc: '6 AM - 11 PM'
                }, {
                  icon: <Users className="w-8 h-8 text-amber-600" />, title: 'Private Dining', desc: 'Special occasions'
                }].map((info, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">{info.icon}</div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 text-sm">{info.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={restaurantImg} alt="Restaurant Interior" className="rounded-2xl shadow-lg" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Menu</h2>
            <div className="relative flex flex-col lg:flex-row gap-8 mb-12 items-stretch bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl border border-amber-100 p-4 lg:p-8">
              <div className="hidden lg:block absolute left-1/3 top-8 bottom-8 w-px bg-amber-200 z-10" />
              <div className="relative lg:w-1/3 w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-100 p-6 flex flex-col justify-center mb-8 lg:mb-0 overflow-hidden hover:shadow-amber-200 transition-shadow duration-300 min-h-0">
                <ChefHat className="absolute opacity-10 text-amber-200 w-32 h-32 right-0 bottom-0 pointer-events-none" />
                <h3 className="text-xl font-bold text-amber-700 mb-2">Welcome to Hotel Harsh Restaurant</h3>
                <p className="text-gray-700 mb-3 text-base leading-relaxed">
                  Explore a world of flavors crafted by our expert chefs. Enjoy signature dishes, seasonal specials, and a refined dining experience.
                </p>
                <ul className="mb-2 space-y-1">
                  <li className="flex items-center gap-2 text-amber-700 font-semibold text-sm"><ChefHat className="w-4 h-4" /> Signature & Seasonal Dishes</li>
                  <li className="flex items-center gap-2 text-amber-700 font-semibold text-sm"><Award className="w-4 h-4" /> Michelin-Rated Quality</li>
                  <li className="flex items-center gap-2 text-amber-700 font-semibold text-sm"><Users className="w-4 h-4" /> Private Dining & Events</li>
                </ul>
              </div>
              <div className="lg:w-2/3 w-full flex flex-col items-center justify-center">
                <div className="mb-6 text-center">
                  <p className="text-lg text-amber-700 font-semibold mb-2">Want to see our full selection?</p>
                  <p className="text-gray-600">Click below to explore the complete menu as a PDF.</p>
                </div>
                <button
                  onClick={() => window.open('/Hotel%20Harsh%20Menu%202025.pdf', '_blank')}
                  className="group flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white text-xl font-extrabold rounded-full shadow-xl border-2 border-amber-300 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-200 hover:scale-105 active:scale-100"
                >
                  <svg className="w-7 h-7 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                  View Full Menu
                </button>
              </div>
            </div>

            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold text-amber-600 mb-8 text-center">{category.name}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-lg border border-amber-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-amber-200 transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                          <span className="text-xl font-bold text-amber-600">{item.price}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Chefs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {chefs.map((chef, index) => (
                <div
                  key={index}
                  className="text-center bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow hover:shadow-amber-200 hover:-translate-y-1 transform transition-all duration-300 border border-amber-100"
                >
                  <img src={chef.image} alt={chef.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{chef.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{chef.title}</p>
                  <p className="text-gray-600">{chef.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
