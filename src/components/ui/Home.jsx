import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

export default function EnhancedAgencyLandingPage() {
  const [activeService, setActiveService] = useState(null);
  const [faqOpen, setFaqOpen] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly');
    if (calendlySection) {
      calendlySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  const services = [
    {
      title: 'Web Design',
      description: 'Let your brand shine through captivating visuals and user-friendly interfaces that convert visitors into customers.',
      icon: '🎨',
      features: ['Responsive Design', 'UI/UX Optimization', 'Performance Focus']
    },
    {
      title: 'Digital Advertising',
      description: 'From Google Ads to Facebook and Instagram campaigns, we create targeted strategies that maximize your ROI.',
      icon: '📱',
      features: ['Google Ads', 'Social Media Ads', 'Analytics & Tracking']
    },
    {
      title: 'Brand Strategy',
      description: 'Make a lasting impression with comprehensive brand strategies that resonate with your target audience.',
      icon: '🚀',
      features: ['Brand Identity', 'Market Research', 'Content Strategy']
    }
  ];

  const faqs = [
    { q: "How long does a typical project take?", a: "Most projects are completed within 4-8 weeks, depending on complexity and scope." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive maintenance and support packages for all our clients." },
    { q: "What's included in your strategy call?", a: "We'll analyze your current presence, discuss goals, and create a custom roadmap for success." },
    { q: "Can you work with our existing team?", a: "Absolutely! We collaborate seamlessly with in-house teams and other vendors." }
  ];

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" 
          style={{animationDelay: '2s'}}
        ></div>
      </div>

      {/* Enhanced Navbar */}
      <div
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-lg border-b border-orange-500/20 shadow-lg' : 'bg-transparent'
        }`}
      >
        <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-orange-500 font-bold text-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
            Noodle Pixel
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm">
            {['Services', 'Process', 'Testimonials', 'Why Us', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="relative hover:text-orange-500 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full text-black font-semibold text-sm shadow-lg hover:scale-105 hover:shadow-orange-500/25 transition-all duration-300"
          onClick={scrollToCalendly}>
            Get Started
          </button>
        </header>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            The Go-To Agency For <br />
            Your Business' <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-gradient">Success</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up-delay-1">
            We help businesses succeed by delivering real results. Let us take your online presence to the next level with cutting-edge strategies!
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up-delay-2">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-full font-semibold text-black text-lg shadow-xl hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-1"
            onClick={scrollToCalendly}>
              Book A Free Strategy Call
            </button>
            
            {/* <button className="border-2 border-orange-500 px-8 py-4 rounded-full font-semibold text-orange-500 hover:bg-orange-500 hover:text-black hover:scale-105 transition-all duration-300">
              View Our Work
            </button> */}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-orange-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-orange-500/20 rounded-lg animate-bounce-slow"></div>
      </section>

      {/* Enhanced Trusted Brands */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
        <p className="text-center text-gray-400 text-sm mb-8 tracking-wider opacity-0 animate-fade-in-up-on-scroll">
          TRUSTED BY AMAZING BRANDS
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl w-40 h-16 flex items-center justify-center text-sm text-white shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up-on-scroll"
              style={{animationDelay: `${i * 100}ms`}}
            >
              Brand Partner {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto py-16 px-6 gap-12">
        <div className="opacity-0 animate-fade-in-left">
          <h2 className="text-orange-500 text-xs uppercase tracking-wider">How We Work</h2>
          <h3 className="text-4xl font-bold mt-2 leading-tight">Get a dedicated team to improve your business' online presence.</h3>
        </div>
        <div className="text-gray-300 opacity-0 animate-fade-in-right">
          <p className="text-lg leading-relaxed mb-6">
            Grow your brand with high-quality marketing that will bring you results. Don't settle for less – work with the best.
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-full text-black font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={scrollToCalendly}>
            Work With Us
          </button>
        </div>
      </section>

      {/* Enhanced Services */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up-on-scroll">
            <p className="text-sm text-orange-500 uppercase tracking-wider mb-4">Our Services</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Your secret weapon to beat the competition
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These premium services are designed to skyrocket your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative opacity-0 animate-fade-in-up-on-scroll"
                style={{animationDelay: `${i * 200}ms`}}
              >
                <div 
                  className={`p-8 rounded-3xl transition-all duration-500 cursor-pointer h-full ${
                    activeService === i 
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-black shadow-2xl shadow-orange-500/25 scale-105 -translate-y-2' 
                      : 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-orange-500/50 hover:scale-105 hover:-translate-y-2 hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h4 className="font-bold text-2xl mb-4">{service.title}</h4>
                  <p className="text-sm leading-relaxed mb-6 opacity-90">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <span className={`w-2 h-2 rounded-full ${activeService === i ? 'bg-black' : 'bg-orange-500'}`}></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats */}
      <section className="py-20 text-center bg-gradient-to-r from-gray-900/50 to-black/50">
        <h3 className="text-4xl font-bold mb-16 opacity-0 animate-fade-in-up-on-scroll">
          Our results speak for themselves
        </h3>
        
        <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto">
          {[
            { value: '100%', label: 'Customer Satisfaction' },
            { value: '$2M+', label: 'Revenue Generated' },
            { value: '150+', label: 'Happy Clients' }
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center group hover:scale-110 transition-all duration-300 opacity-0 animate-fade-in-up-on-scroll"
              style={{animationDelay: `${i * 200}ms`}}
            >
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 animate-pulse">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50 text-center">
        <h3 className="text-3xl font-bold mb-10 opacity-0 animate-fade-in-up-on-scroll">Our process</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-left">
          {['Contact Us', 'Project Proposal', 'Project Start'].map((step, i) => (
            <div key={i} className="opacity-0 animate-fade-in-up-on-scroll" style={{animationDelay: `${i * 200}ms`}}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <h4 className="text-orange-500 font-semibold text-xl mb-3">{i + 1}. {step}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step === 'Contact Us' && 'Kick off your journey by reaching out to our expert team for a comprehensive consultation.'}
                  {step === 'Project Proposal' && 'We craft a customized proposal tailored to your specific business needs and goals.'}
                  {step === 'Project Start' && 'We dive straight into action, implementing strategies that deliver measurable results.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 text-center">
        <h3 className="text-3xl font-bold mb-10 opacity-0 animate-fade-in-up-on-scroll">What our clients say about us</h3>
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-gray-100 text-black p-8 rounded-3xl shadow-2xl opacity-0 animate-fade-in-up-on-scroll">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                AT
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Abou Toure</p>
                <p className="text-sm text-gray-600">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed italic">
              "X Agency transformed our online presence completely. Their marketing strategies increased our revenue by 300% in just 6 months. Absolutely incredible results!"
            </p>
            <div className="flex justify-center mt-4 text-orange-500">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ */}
      <section id="faq" className="py-20 px-6 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up-on-scroll">
            <h3 className="text-4xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-300">Everything you need to know about working with us</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 opacity-0 animate-fade-in-up-on-scroll"
                style={{animationDelay: `${i * 100}ms`}}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors duration-300"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  <span 
                    className={`text-orange-500 text-2xl transition-transform duration-300 flex-shrink-0 ${
                      faqOpen[i] ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen[i] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="bg-gradient-to-br from-gray-900/50 to-black/50 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up-on-scroll">
          <h3 className="text-3xl font-bold mb-4">Why should you choose <span className="text-orange-500">X Agency</span></h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We create data-backed digital marketing strategies that deliver real, measurable results for your business growth.
          </p>
          <button className="bg-orange-500 px-8 py-4 rounded-full text-black font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
          onClick={scrollToCalendly}>
            Get Started
          </button>
        </div>
        
        <div className="mt-16 opacity-0 animate-fade-in-up-on-scroll">
          <h4 className="text-2xl font-bold mb-8">Our Work Portfolio</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-br from-gray-800 to-gray-700 h-32 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-gray-400 hover:text-white border border-gray-600 hover:border-orange-500/50"
              >
                Project {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 opacity-0 animate-fade-in-up-on-scroll">
            <h3 className="text-4xl font-bold mb-4">
              Ready to <span className="text-orange-500">Get Started?</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Book your free strategy call today and discover how we can transform your business
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 opacity-0 animate-fade-in-up-on-scroll">
            <InlineWidget 
              url="https://calendly.com/amrabdelwahed00/30min"
              styles={{
                height: '630px',
                borderRadius: '12px'
              }}
            />
          </div>

          <div className="mt-8 text-center opacity-0 animate-fade-in-up-on-scroll">
            <p className="text-gray-400 text-sm">
              Can't see the calendar? <a href="https://calendly.com/amrabdelwahed00/30min" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 underline">Click here to book directly</a>
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 opacity-0 animate-fade-in-up-on-scroll">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to transform your business?
          </h3>
          
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that chose X Agency for explosive growth
          </p>
          
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-black/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          onClick={scrollToCalendly}>
            Start Your Success Story Today
          </button>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-md opacity-0 animate-fade-in-left">
              <div className="text-orange-500 font-bold text-3xl mb-4">Noodle Pixel</div>
              <p className="text-gray-300 leading-relaxed">
                The leading marketing agency transforming businesses through innovative digital strategies and creative excellence.
              </p>
            </div>
            
            <div className="space-y-4 opacity-0 animate-fade-in-right">
              <div className="text-gray-300">
                <p className="font-semibold mb-2 text-white">Get in touch</p>
                <p>amrabdelwahed@gmail.com</p>
                <p>365-228-6281</p>
              </div>
              <div className="flex gap-4 pt-4">
                {['L', 'T', 'I'].map((platform, i) => (
                  <div
                    key={platform}
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg"
                  >
                    <span className="text-black font-bold">
                      {platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 X Agency. All rights reserved. Built for success.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 0.8s ease-out 0.3s forwards;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
        }

        .animate-fade-in-up-on-scroll {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}