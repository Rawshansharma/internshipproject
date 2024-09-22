import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 w-full fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">BrandLogo</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-green-600">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
        </nav>
        <div>
        <button className=" text-black border-2 px-4 py-2 rounded-md hover:bg-green-700 mr-6">
          Log In
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 ">
          Sign Up
        </button>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
