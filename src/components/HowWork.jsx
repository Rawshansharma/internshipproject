import React from 'react';

const HowWork = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center h-screen">
      {/* Left Side: Image */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src="https://printify.com/wp-content/uploads/2023/09/Print-on-Demand-an-Open-Opportunity.jpg" 
          alt="main-image" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text */}
      <div className="md:w-1/2 text-center mx-40 md:text-left ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Easily add your design to a wide range of products
        </h1>
        <p className="text-gray-600 mb-6">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <div>
          <a 
            href="/" 
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            All products
          </a>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
