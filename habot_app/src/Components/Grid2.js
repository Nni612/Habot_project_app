import React, { useState } from 'react';

function Grid2() {
  // State to track the active section (Buyer or Supplier)
  const [activeSection, setActiveSection] = useState('buyer');

  return (
    <div className="bg-blue-950  p-5" style={{ marginTop: '-400px' }}>
      {/* Center container horizontally */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Section 1: Introduction Video */}
          <div>
            <h2 className="text-white font-bold text-xl sm:text-2xl mb-4">
              Watch Our Introduction Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Section 2: Buyer & Supplier */}
          <div className="flex flex-col md:flex-row gap-6 text-white">
            {/* Buyer Section */}
            <div className="flex flex-col w-full">
              <h3
                className={`font-bold text-lg sm:text-xl mb-4 cursor-pointer ${
                  activeSection === 'buyer' ? 'border-b-2 border-white' : ''
                }`}
                onClick={() => setActiveSection('buyer')}
              >
                Buyer
              </h3>
              {/* Conditional rendering for Buyer content */}
              {activeSection === 'buyer' && (
                <div className="w-full">
                  <ul className="list-disc pl-5 text-sm sm:text-base">
                    <li className="mb-2">Post your requirements.</li>
                    <li className="mb-2">Sit back for multiple suppliers to contact you.</li>
                    <li className="mb-2">Choose among the suppliers based on the ratings and reviews.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Supplier Section */}
            <div className="flex flex-col w-full">
              <h3
                className={`font-bold text-lg sm:text-xl mb-4 cursor-pointer ${
                  activeSection === 'supplier' ? 'border-b-2 border-white' : ''
                }`}
                onClick={() => setActiveSection('supplier')}
              >
                Supplier
              </h3>
              {/* Conditional rendering for Supplier content */}
              {activeSection === 'supplier' && (
                <div className="w-full">
                  <ul className="list-disc pl-5 text-sm sm:text-base">
                    <li className="mb-2">Choose among the suppliers based on the ratings and reviews.</li>
                    <li className="mb-2">Post your requirements.</li>
                    <li className="mb-2">Sit back for multiple suppliers to contact you.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid2;
