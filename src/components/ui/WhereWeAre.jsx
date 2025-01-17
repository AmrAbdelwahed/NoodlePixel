import React from 'react';
import canadaImage from '../../assets/canada.png'; // Adjust the relative path if needed


const WhereWeAre = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Locations We Serve
        </h2>
        <div className="text-xl text-gray-700">
          Here's where companies can find great security guards from Guard Armor.
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="relative">
          <a href="/canada" className="block">
            <img
              src={canadaImage} // Adjust the image path accordingly
              alt="Canada Security Services"
              className="mx-auto max-w-[60%] max-h-[40%] object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold">Canada</h3>
              <p className="text-white opacity-90">Nationwide Security Services</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhereWeAre;