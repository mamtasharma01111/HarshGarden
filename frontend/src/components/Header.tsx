import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBanquetOpen, setIsBanquetOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBanquetOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsBanquetOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Restaurant', path: '/restaurant' },
    { 
      label: 'Banquet', 
      path: '/banquet',
      dropdown: [
        { label: 'Awadh Hall', path: '/banquet/awadhhall' },
        { label: 'Awantika', path: '/banquet/awantika' },
        { label: 'Mithilla', path: '/banquet/mithilla' }
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-10 rounded-lg flex items-center justify-center">
            <img src={logo} alt="Harsh Garden" className="w-20 h-10" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group" ref={item.dropdown ? dropdownRef : null}>
                {item.dropdown ? (
                  <>
                    <div className="flex items-center space-x-1">
                      <Link
                        to={item.path}
                        className={`font-medium transition-colors duration-200 ${
                          isActive(item.path) 
                            ? 'text-amber-600' 
                            : 'text-gray-700 hover:text-amber-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setIsBanquetOpen(!isBanquetOpen)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isBanquetOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {isBanquetOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setIsBanquetOpen(false)}
                            className={`block px-4 py-2 text-sm ${
                              isActive(dropdownItem.path)
                                ? 'text-amber-600 bg-amber-50'
                                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-200 relative group ${
                      isActive(item.path) 
                        ? 'text-amber-600' 
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-600 transition-all duration-200 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`font-medium transition-colors ${
                            isActive(item.path) 
                              ? 'text-amber-600' 
                              : 'text-gray-700 hover:text-amber-600'
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setIsBanquetOpen(!isBanquetOpen)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <ChevronDown size={16} className={`transition-transform duration-200 ${isBanquetOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {isBanquetOpen && (
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsBanquetOpen(false);
                              }}
                              className={`block py-2 text-sm ${
                                isActive(dropdownItem.path)
                                  ? 'text-amber-600'
                                  : 'text-gray-700 hover:text-amber-600'
                              }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-left font-medium transition-colors py-2 ${
                        isActive(item.path) 
                          ? 'text-amber-600' 
                          : 'text-gray-700 hover:text-amber-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;