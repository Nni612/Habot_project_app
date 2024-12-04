import React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";
import { PiNotePencilBold } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
function Grid4() {
  return (
    <div className="min-h-screen grid place-items-center"> {/* Using grid to center */}
      <div className="container text-center">
        <h1 className="text-5xl font-bold">How it works?</h1>
        <p className="mx-auto max-w-4xl mt-5">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>

        {/* New Grid Section with 2 rows and 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3  mt-10">
          {/* Grid Item 1 */}
          <div className="flex flex-col items-center bg-sky-100 p-5">
            <i className="text-4xl mb-4 text-blue-500"><FaUserPlus/></i> {/* Replace with your icon */}
            <p className="text-lg">Select your role and Sign Up</p>
          </div>

          {/* Grid Item 2 */}
          <div className="flex flex-col items-center p-5">
            <i className="text-4xl mb-4 text-green-500"><MdPlaylistAddCheck/></i> {/* Replace with your icon */}
            <p className="text-lg">Buyer Post Your Requirements</p>
          </div>

          {/* Grid Item 3 */}
          <div className="flex flex-col items-center bg-sky-100 p-5">
            <i className="text-4xl mb-4 text-yellow-500"><VscOpenPreview/></i> {/* Replace with your icon */}
            <p className="text-lg">Review, Select, and Contact the Best Suppliers</p>
          </div>

          {/* Grid Item 4 */}
          <div className="flex flex-col items-center p-5">
            <i className="text-4xl mb-4 text-purple-500"><ImProfile/></i> {/* Replace with your icon */}
            <p className="text-lg">Suppliers Complete your profile and get notified for opportunities</p>
          </div>

          {/* Grid Item 5 */}
          <div className="flex flex-col items-center bg-sky-100 p-5">
            <i className="text-4xl mb-4 text-red-500"><PiNotePencilBold/></i> {/* Replace with your icon */}
            <p className="text-lg">Contact to Buyers and share your Quote for the service</p>
          </div>

          {/* Grid Item 6 */}
          <div className="flex flex-col items-center p-5">
            <i className="text-4xl mb-4 text-orange-500"><FaHandshake/></i> {/* Replace with your icon */}
            <p className="text-lg">Both the Parties can connect and Make Business leave a Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid4;
