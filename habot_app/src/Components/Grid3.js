import React from 'react';

function Grid3() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-sky-100 mt-20 p-5 w-full gap-5 md:gap-80">
      {/* Text Section */}
      <p className="text-black text-xl text-center md:text-left">
        Let Suppliers <u style={{ textDecorationColor: 'orange' }}>Find You</u>
      </p>

      {/* Button Section */}
      <button className="text-white bg-orange-500 py-2 px-4 rounded-md">
        Get Verified
      </button>
    </div>
  );
}

export default Grid3;
