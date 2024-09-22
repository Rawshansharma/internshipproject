import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          <a href="#terms" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
