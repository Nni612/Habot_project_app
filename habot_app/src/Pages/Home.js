import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Grid from '../Components/Grid';
import Grid2 from '../Components/Grid2';
import Grid3 from '../Components/Grid3';
import Grid4 from '../Components/Grid4';

function Home() {
  // State to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar with toggle functionality */}
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Wrapper for Grid */}
        <div className="relative z-10">
          <Grid />
        </div>

        {/* Wrapper for Grid2 */}
        <div className="relative z-20 mt-16 lg:mt-0">
          <Grid2 />
        </div>

        {/* Wrapper for Grid3 */}
        <div className="relative z-30 mt-16 lg:mt-0">
          <Grid3 />
        </div>

        {/* Wrapper for Grid4 */}
        <div className="relative z-40 mt-16 lg:mt-0">
          <Grid4 />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
