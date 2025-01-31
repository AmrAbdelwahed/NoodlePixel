import React from 'react';
import { Shield, CheckCircle, Clock, UserCheck } from 'lucide-react';

const GuardTypes = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16 leading-tight">
            The Right Security Guards
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Are Just a Click Away
            </span>
          </h2>

          <div className="mb-24">
            <p className="text-2xl text-gray-600 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              Whether you need retail guards, residential guards, or specialized security personnel, 
              we source only the most experienced professionals.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform rotate-1 rounded-2xl opacity-75 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900"> Retail Security Guards or Healthcare Security Officers</h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 transform -rotate-1 rounded-2xl opacity-75 group-hover:-rotate-2 transition-transform"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Residential Guards or Private Event Guards</h3>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-200 transform rotate-1 rounded-2xl opacity-75 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Parking & Facility Guards or Mobile Patrol Security</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-900 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-blue-800 text-white rounded-3xl p-16">
              <h2 className="text-3xl font-bold text-center mb-6">
                Our Premium Screening Process
              </h2>
              <p className="text-xl text-blue-100/90 text-center mb-16 max-w-3xl mx-auto">
                We help you save time in your search for the perfect security guard. Our team takes 
                the time to verify every guard that completes an application so you get quality 
                applicants every time.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="text-center group">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                    <h3 className="text-xl font-bold text-blue-100 mb-3">Valid Security License</h3>
                    <p className="text-blue-100/90 text-sm leading-relaxed">
                      All guards must upload current security licenses and certifications
                    </p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <CheckCircle className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                    <h3 className="text-xl font-bold text-blue-100 mb-3">Background Check</h3>
                    <p className="text-blue-100/90 text-sm leading-relaxed">
                      Comprehensive background checks and clearance verification
                    </p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <Clock className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                    <h3 className="text-xl font-bold text-blue-100 mb-3">Work History</h3>
                    <p className="text-blue-100/90 text-sm leading-relaxed">
                      Verified employment history and professional references
                    </p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <UserCheck className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                    <h3 className="text-xl font-bold text-blue-100 mb-3">Screening Interview</h3>
                    <p className="text-blue-100/90 text-sm leading-relaxed">
                      Personal interview to verify qualifications and experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardTypes;