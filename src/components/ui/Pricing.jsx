import React from 'react';
// import { Link } from 'react-router-dom';
import { Clock, UserPlus, Users, Briefcase } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            Pricing
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 text-center">
            Whether you need security guards for a day, a month, or for the long-term, our 
            experienced team of recruiters will hand-pick the best security professionals for 
            your needs, based on the job requirements you provide.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-bold mb-2">Temporary</h3>
              <p className="text-gray-600">Short-term staffing solutions for immediate needs</p>
            </div>

            <div className="text-center">
              <UserPlus className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-bold mb-2">Temporary to Permanent</h3>
              <p className="text-gray-600">Try before you hire permanent staff</p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-bold mb-2">Full-Time Leased</h3>
              <p className="text-gray-600">Agency guards for long-term assignments</p>
            </div>

            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-bold mb-2">Direct Hires</h3>
              <p className="text-gray-600">Permanent placement services</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 text-center mb-8">
            No matter what you need, whether it's assistance posting security guard positions 
            or using the platform, we're here to help.
          </p>

          <div className="text-center space-y-4">
            {/* <Link 
              to="/companies-register" 
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg 
                       hover:bg-blue-700 transition-colors text-lg"
            >
              Sign up
            </Link> */}
            <p className="text-lg">
              or call us today at <span className="font-bold">519-999-9730</span> to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;