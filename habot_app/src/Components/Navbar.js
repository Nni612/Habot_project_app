import React, { useState, useEffect } from 'react';
import logo from '../Assets/Images/image 1.svg';
import backgroundImg from '../Assets/Images/Rectangle 1.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { MdLocationPin } from 'react-icons/md';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setIsMenuOpen(false); // Close the menu on desktop view
      }
    };

    // Set initial view
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar p-4 text-white z-10">
        <div className="container-fluid flex justify-between items-center">
          <img src={logo} alt="logo" className="h-10" />

          {/* Hamburger Icon for Mobile/Tablets */}
          <button
            className="text-gray-600 text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu Items - For Mobile View */}
          <ul
            className={`absolute left-0 w-full text-gray-800 flex flex-col items-center space-y-4 p-4 sm:p-0 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${isMenuOpen && isMobileView ? 'top-10' : 'top-0'}`}
          >
            <li className="my-2 md:my-0">
              <a href="#" className="text-gray-600 hover:underline">
                Find Suppliers
              </a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#" className="text-gray-600 hover:underline">
                Find Services Tags
              </a>
            </li>
            <li className="my-2 md:my-0">
              <button className="bg-white text-green-600 px-4 py-2 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-green-400">
                Login/SignUp
              </button>
            </li>
          </ul>

          {/* Menu Items - For Desktop View */}
          <ul className="hidden md:flex md:space-x-6 md:items-center">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Find Suppliers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Find Services Tags
              </a>
            </li>
            <li>
              <button className="bg-white text-green-600 px-4 py-2 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-green-400">
                Login/SignUp
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Below Navbar */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-300 ${isMenuOpen ? 'mt-32' : 'mt-0'}`}
      >
        {/* Background Image */}
        <img src={backgroundImg} alt="bgImg" className="w-full h-auto object-cover" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-3 gap-4 sm:gap-6">
          {/* Heading */}
          <b className="text-sm sm:text-lg md:text-2xl lg:text-4xl text-white font-bold leading-tight">
            Are you a Supplier?
          </b>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white leading-tight">
            Explore Matching Opportunities.
          </p>

          {/* Input Fields and Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 items-center mt-4 sm:mt-6 w-full max-w-[95%] md:max-w-4xl">
            {/* First Input Group */}
            <div className="relative w-full max-w-xs mx-auto">
              <input
                id="service1"
                name="service1"
                type="text"
                placeholder="Search your required service"
                className="w-full py-2 sm:py-3 pl-8 pr-3 text-xs sm:text-sm md:text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span className="absolute inset-y-0 left-2 flex items-center text-yellow-500">
                <PiSuitcaseSimpleLight />
              </span>
            </div>

            {/* Second Input Group */}
            <div className="relative w-full max-w-xs mx-auto">
              <input
                id="service2"
                name="service2"
                type="text"
                placeholder="Search your desired location"
                className="w-full py-2 sm:py-3 pl-8 pr-3 text-xs sm:text-sm md:text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span className="absolute inset-y-0 left-2 flex items-center text-yellow-500">
                <MdLocationPin />
              </span>
            </div>

            {/* Search Button */}
            <div className="w-full max-w-xs mx-auto">
              <button className="w-full bg-green-800 text-white py-2 sm:py-3 px-3 rounded-md hover:bg-green-700 text-xs sm:text-sm md:text-base">
                Search
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-white text-xs sm:text-sm md:text-base mt-4 sm:mt-6">
            Are you a buyer? &nbsp;
            <a href="#" className="underline font-light">
              Click here if you are looking to post a requirement
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
