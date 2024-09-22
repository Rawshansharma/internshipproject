import React, { useState, useEffect } from 'react';

const stickers = [
  'https://printify.com/pfh/assets/animations/images/img_3.png',  // Sticker 1
  'https://printify.com/pfh/assets/animations/images/img_2.png',  // Sticker 2
  'https://printify.com/pfh/assets/animations/images/img_1.png',  // Sticker 3
];

const HeroSection = () => {
  const [currentSticker, setCurrentSticker] = useState(0);

  // Swap the sticker after the hand movement
  const swapSticker = () => {
    setTimeout(() => {
      setCurrentSticker((prev) => (prev + 1) % stickers.length); // Change sticker
    }, 1500); // Hand animation duration (1.5 seconds)
  };

  useEffect(() => {
    const interval = setInterval(swapSticker, 3000); // Swap sticker every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-black px-4">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug md:leading-relaxed mb-4">
            Create and sell custom products
          </h1>
          <div className="space-y-3 mb-6">
            <p className="text-lg md:text-2xl text-gray-500">
              ✅ 100% Free to use
            </p>
            <p className="text-lg md:text-2xl text-gray-500">
              ✅ 900+ High-Quality Products
            </p>
            <p className="text-lg md:text-2xl text-gray-500">
              ✅ Largest global print network
            </p>
          </div>
          <div className="flex space-x-4 mb-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Start for free
            </button>
            <button className="bg-transparent border border-gray-300 text-black px-6 py-3 rounded-md hover:border-black">
              How it works?
            </button>
          </div>
          <p className="text-gray-600">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right Side: T-Shirt and Sticker */}
        <div className="md:w-1/2 relative p-5">
          {/* T-Shirt Image */}
          <img
            src="https://printify.com/pfh/assets/animations/images/img_5.png"
            alt="tshirt-img"
            className="w-full h-auto"
          />

          {/* Sticker on the T-Shirt */}
          <img
            src={stickers[currentSticker]}
            alt="sticker"
            className="
              absolute 
              left-1/2 transform -translate-x-1/2
              w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
              top-32 md:top-36 lg:top-40
              transition-opacity duration-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
