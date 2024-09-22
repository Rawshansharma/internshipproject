import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 ">
      <div className="container mx-auto  text-left px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* First Feature */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
              <img 
                src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
                alt="Feature 1"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Higher Profits</h2>
            <p className="text-gray-600">
              We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
            </p>
          </div>

          {/* Second Feature */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
              <img 
                src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
                alt="Feature 2"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Robust Scaling</h2>
            <p className="text-gray-600">
              Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
            </p>
          </div>

          {/* Third Feature */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
              <img 
                src="https://printify.com/pfh/assets/legacy/best-selection.svg"
                alt="Feature 3"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Wide Selection</h2>
            <p className="text-gray-600">
              With 900+ products and top quality brands, you can choose the best products for your business.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
