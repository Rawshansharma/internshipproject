import React from 'react';
 
const Pricing = () => {
  return (
    <div className="pricing h-screen bg-gray-100 flex  items-center justify-center">
      <div className="pricing-content max-w-md px-8 py-12 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Make Money, Risk-Free</h1>
        <p className="text-gray-700 text-center mb-8">You pay for fulfillment only when you make a sale</p>

        <div className="profit-breakdown grid grid-cols-2 gap-4 mb-8">
          <div className="text-gray-700">You sell a t-shirt</div>
          <div className="text-right font-bold">$30</div>
          <div className="text-gray-700">You pay for its production</div>
          <div className="text-right font-bold">$10</div>
          <hr className="col-span-2 border-gray-200" />
          <div className="text-green-500 font-bold">Your profit</div>
          <div className="text-right text-green-500 font-bold">$18</div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
          Start selling
        </button>
        <p className="text-gray-700 text-center mt-4">100% Free to use · 900+ Products · Largest print network</p>
      </div>

      <div className="pricing-image mt-8 hidden md:block">
        <img
          src="https://printify.com/wp-content/uploads/2024/08/Printify-Choice-only-the-best.png"
          alt="Printify: Choice, only the best"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Pricing;