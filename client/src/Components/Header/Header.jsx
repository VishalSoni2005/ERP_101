import SideBarico from '/src/assets/show_sidebar_horizontal_icon_128225.png';
import me from '/src/assets/me.jpg';
import daysearch from '/src/assets/daysearch.png';
import I2IT from '/src/assets/I2IT_Logo.png';
import { useState } from 'react';
import Card from '/src/Components/SideCard/Card.jsx';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 flex justify-between items-center w-full p-2 overflow-hidden shadow-lg fixed top-0 z-50">
        {/* Sidebar Toggle */}
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
        >
          <img
            src={SideBarico}
            alt="Sidebar Icon"
            className={`w-12 h-12 rounded-lg bg-gray-500 transform transition-transform duration-500 ${
              isSidebarOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* Institute logo and name */}
        <div className="flex items-center gap-4">
          <img
            src={I2IT}
            className="w-14 h-14 rounded-xl shadow-lg transition-transform hover:scale-110 duration-300"
            alt="I2IT Logo"
          />
          {/* Hide institute name on medium screens */}
          <span className="text-2xl text-white font-semibold hover:text-gray-300 transition-colors duration-300 hidden md:block">
            International Institute of Information Technology
          </span>
        </div>

        {/* Search bar - Hide on medium screens */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full shadow-md w-96 h-12 px-4 text-white hover:ring-2 ring-gray-400 transition-all duration-300">
          <input
            className="w-full bg-transparent px-4 py-2 text-sm outline-none text-white placeholder-gray-400"
            type="text"
            placeholder="Search..."
          />
          <button className="p-2  bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
            <img
              src={daysearch}
              className="w-5 h-5 hover:scale-110 transition-transform duration-300"
              alt="Search Icon"
            />
          </button>
        </div>

        {/* Student details */}
        <div className="flex items-center gap-4 bg-gray-800 rounded-full shadow-lg px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300">
          <img
            src={me}
            className="w-12 h-12 rounded-full border-2 border-gray-500 hover:ring-2 ring-gray-400 transition-all duration-300"
            alt="User Avatar"
          />
          <span className="text-white font-bold hover:text-gray-300 transition-colors duration-300 ">
            Vishal Kumar Soni
          </span>
        </div>
      </div>

      {/* Sidebar Card */}
      {isSidebarOpen && <Card />}
    </>
  );
}
