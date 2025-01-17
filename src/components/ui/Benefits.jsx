import React from 'react';

const Benefits = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">
            <span className=" text-blue-900">
              How You Benefit
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Security Companies Benefits */}
            <div className="relative">
              <div className="relative bg-white p-10 rounded-3xl shadow-xl">
                <div className="absolute -top-8 left-10 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                  For Security Companies
                </div>
                
                <div className="space-y-8 mt-6">
                  <p className="text-lg text-gray-600 border-b border-gray-100 pb-6">
                    Guard Armor is your one-stop-shop for security guard staffing solutions. 
                    We'll help you save time, money and hassle, so you can focus on your business.
                  </p>
                  
                  {[
                    {
                      title: "Flexibility",
                      description: "Whether you need guards for a day, a month, or for the long-term, you can count on Guard Armor to find you the perfect candidate."
                    },
                    {
                      title: "Online & On-Demand Staffing Services",
                      description: "With on-demand access to our large and growing personnel database, our team will make sure that you get the right match."
                    },
                    {
                      title: "Quality Candidates",
                      description: "All of our candidates are extensively screened and vetted, so you can focus on your business and leave the staffing to us."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="group">
                      <h4 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Guards Benefits */}
            <div className="relative">
              <div className="relative bg-white p-10 rounded-3xl shadow-xl">
                <div className="absolute -top-8 left-10 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                  For Security Guards
                </div>
                
                <div className="space-y-8 mt-6">
                  <p className="text-lg text-gray-600 border-b border-gray-100 pb-6">
                    For guards, our services are easy to use, and it's free to join! 
                    Once your job search is successful, you get paid weekly by direct deposit. 
                    It's that simple.
                  </p>
                  
                  {[
                    {
                      title: "Search Jobs Quickly and Easily",
                      description: "Find new jobs. Start getting notified of security opportunities once you sign up. The best jobs are all right here waiting for you."
                    },
                    {
                      title: "Earn More Money & Spend Less Time Searching",
                      description: "We quickly and easily connect you with companies that offer excellent rates, so you can maximize your income and minimize your time spent looking for jobs."
                    },
                    {
                      title: "Leverage Your Skills & Experience",
                      description: "Your Guard Armor profile lets your experience do the talking, automatically building your job history as you go. We help you focus on protecting and earning."
                    },
                    {
                      title: "Stay Connected",
                      description: "The Guard Armor app is your source for accurate, up-to-date information about your jobs, so you'll always know exactly where you're going and who to contact."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="group">
                      <h4 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;