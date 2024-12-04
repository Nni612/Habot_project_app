import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Grid() {
  return (
    <div className="min-h-screen mt-8"> {/* Page wrapper */}
      <div className="container mx-auto bg-white p-6 sm:p-8 md:p-12"> {/* Center container with padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start"> {/* Responsive grid */}
          {/* Section 1 */}
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl font-serif text-center lg:text-left">
              Ready to dive into HABOT?
            </h2>
            <p className="mt-5 text-center lg:text-left font-light text-base sm:text-lg md:text-xl">
              Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
              Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first
              step towards realizing your entrepreneurial dreams.
            </p>
            <div className="mt-5 flex justify-center lg:justify-start">
              <button className="flex gap-4 items-center bg-green-800 text-white py-2 px-6 rounded-md hover:bg-green-700">
                Sign up Today! <GoArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="border border-yellow-600 text-center p-4 text-sm sm:text-base md:text-lg">
              Abu Dhabi
            </div>
            <div className="border border-yellow-600 text-center p-4 text-sm sm:text-base md:text-lg">
              Dubai
            </div>
            <div className="border border-yellow-600 text-center p-4 text-sm sm:text-base md:text-lg">
              Sharjah & Ajman
            </div>
            <div className="border border-yellow-600 text-center p-4 text-sm sm:text-base md:text-lg">
              Fujairah
            </div>
            <div className="border border-yellow-600 text-center p-4 text-sm sm:text-base md:text-lg">
              Ras AI Khaimah
            </div>
            <div className="border border-yellow-600 text-center p-4 text-sm sm:text-base md:text-lg">
              Umm AI Quwain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
