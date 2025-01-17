import React from 'react';

import HowItWorks from './HowItWorks';
import WhereWeAre from './WhereWeAre';
import Benefits from './Benefits';
import StreamlineHiring from './StreamlineHiring';
import GuardTypes from './GuardTypes';
import Pricing from './Pricing';
import About from './About';
import BannerBackground from "@/assets/securityguard.png";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <div 
        className="relative h-[50vh] bg-[rgb(25,24,35)] bg-center bg-cover"
        style={{
          backgroundImage: `url(${BannerBackground})`
        }}
      >
        <div className="px-4 py-12 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Find Security Guards the Easy Way.
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Companies Start Here Button */}
            <Link
              to="/companies-for-hire"
              target="_blank"
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#2A69EF] rounded-lg text-center hover:bg-blue-600 transition-colors sm:w-auto w-4/6"
              >
              Companies Start Here
            </Link>
            
            {/* Security Guards Start Here Button */}
            <Link
              to="/security-guard-register"
              target="_blank"
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-[#2A69EF] rounded-lg text-center hover:bg-blue-600 transition-colors sm:w-auto w-4/6"
              >
              Security Guards Start Here
            </Link>
          </div>
        </div>
      </div>

      {/* Selling/Marketing Pitch */}

      {/* Sections */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="where-we-are">
        <WhereWeAre />
      </div>

      <div id="benefits">
        <Benefits />
      </div>

      <div id="streamline-hiring">
        <StreamlineHiring />
      </div>

      <div id="guard-types">
        <GuardTypes />
      </div>
      
      <div id="pricing">
        <Pricing />
      </div>

      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
