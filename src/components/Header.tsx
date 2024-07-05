import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function Header() {
  return (
    <div className="bg-blue-500 h-16 flex items-center justify-center px-4">
      <nav className="space-x-4">
        <Link to="/" className="text-white text-lg font-semibold">
          Home
        </Link>
        <Link to="/table" className="text-white text-lg font-semibold">
          Table
        </Link>
      </nav>
    </div>
  );
}

export default Header;
