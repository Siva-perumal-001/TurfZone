import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navBook = ()=>{
    navigate("/my-bookings")
  }

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="TurfZone" className="md:h-15 h-9 w-auto" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home"><li className="hover:text-green-400 cursor-pointer">Home</li></a>
          <a href="#turfs"><li className="hover:text-green-400 cursor-pointer">Turfs</li></a>
          <li className="hover:text-green-400 cursor-pointer" onClick={navBook}>My Bookings</li>
          <li>
            <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition">
              Book Now
            </button>
          </li>
        </ul>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium">
            <a href="#home"><li className="hover:text-green-400 cursor-pointer">Home</li></a>
            <a href="#turfs"><li className="hover:text-green-400 cursor-pointer">Turfs</li></a>
            <li className="hover:text-green-400 cursor-pointer" onClick={navBook}>My Bookings</li>
            <button className="bg-green-600 py-2 rounded-lg">
              Book Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
