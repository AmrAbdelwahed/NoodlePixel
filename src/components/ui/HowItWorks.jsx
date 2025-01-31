import React from 'react';
import { UserCheck, Clock, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';


const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Security Guard Agency Technology Driven
          </h1>
          <p className="text-xl text-gray-700">
            Guard Armor is driven by a commitment to the success of both security guards and companies. 
            Our security staffing services help our industry customers staff their positions with qualified, 
            experienced guards, and they can help guards find jobs quickly and easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <UserCheck size={48} className="text-blue-600" />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Finding Guards,<br />Simplified</h5>
              <p className="text-gray-600">
                Our staffing solutions help our security industry clients maintain safety and protection 
                with convenient and reliable guard staffing services. If you need security guards, 
                simply create your free account, then tell us what kind of guard you are looking for.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <Clock size={48} className="text-blue-600" />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Find Guards<br />Quickly</h5>
              <p className="text-gray-600">
                Guard Armor instantly identifies pre-vetted security guards that match your criteria 
                for skills and experience from our database. The search for your next security guard 
                has never been easier.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <Shield size={48} className="text-blue-600" />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Get Qualified<br />Guards</h5>
              <p className="text-gray-600">
                Our staffing agency carefully screens each guard candidate to verify their qualifications 
                and experience. When your company hires a security guard from Guard Armor, they are 
                hand-picked and prepared for their first day on the job.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <Globe size={48} className="text-blue-600" />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Agile & Responsive Online Service</h5>
              <p className="text-gray-600">
                Our guard staffing services are accessible online, 24/7. Check the status of a request, 
                make new requests or view applicants anytime, anywhere. We'll support your operations 
                and supply anything from last-minute replacements to qualified long-term hires.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full md:flex-row">
          {/* Companies Start Here Button */}
          <Link
            to="/companies-for-hire"
            target="_blank"
            className="w-full md:w-auto px-8 py-4 text-base text-large font-bold text-white bg-[#2A69EF] rounded-lg text-center hover:bg-blue-600 transition-colors max-w-[300px]"
          >
            Companies Start Here
          </Link>
          
          {/* Security Guards Start Here Button */}
          <Link
            to="/security-guard-register"
            target="_blank"
            className="w-full md:w-auto px-8 py-4 text-base text-large font-bold text-white bg-[#2A69EF] rounded-lg text-center hover:bg-blue-600 transition-colors max-w-[300px]"
          >
            Security Guards Start Here
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;