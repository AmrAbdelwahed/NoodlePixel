import React from 'react';
import { Award, Shield, Zap } from 'lucide-react';
import canadaImage from '../../assets/canada.png'; // Adjust the relative path if needed

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            About GUARDARMOR SECURITY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Award size={32} className="text-blue-600" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Committed Leader in Staffing
            </h5>
            <p className="text-gray-600">
              With years experience in the security and protection industries means 
              access to a network of quality companies and experienced guards. 
              We work with organizations and customers all across North America.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <Shield size={32} className="text-blue-600" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Responsible & Efficient Marketplace
            </h5>
            <p className="text-gray-600">
              We offer security companies on-demand access to a database of guards 
              that are pre-vetted for safety, eligibility, and availability. 
              They're all ready to protect and serve the moment you need them.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <Zap size={32} className="text-blue-600" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Automated Onboarding
            </h5>
            <p className="text-gray-600">
              An easy application process and automated "smart" guard matching means 
              companies can connect with the security guards they need, and it's all 
              done in real-time, with direct communication.
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* Contact Us Button */}
          <a 
            href="mailto:info@guardarmor.ca?subject=More%20information%20about%20Guard%20Armor%20please"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>

          {/* Contact Information */}
          <div className="mt-6 space-y-2 text-gray-700">
            <p className="text-lg">
              Head Office: <span className="font-semibold">Oakville, Ontario, Canada <img src={canadaImage} alt="🇨🇦" className="inline-block w-5 h-3.5" /></span>
            </p>
            <p className="text-lg">
              Email Address: <span className="font-semibold">info@guardarmor.ca</span>
            </p>
            <p className="text-lg">
              Phone Number: <span className="font-semibold">519-999-9730</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;