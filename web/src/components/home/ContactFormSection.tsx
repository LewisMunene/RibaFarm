'use client';

import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact <span className="text-green-600">Us</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about RibaFarms? We are here to help! Reach out to us and let us grow together.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Info */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/market.jpg" 
                alt="Fresh produce at market"
                className="w-full h-[500px] object-cover"
              />
             
            </div>

            {/* Contact Info Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hidden lg:block">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold text-gray-900">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-gray-900">hello@ribafarms.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">GET IN TOUCH</h3>
              <p className="text-gray-600">24/7 We will answer your questions and problems</p>
            </div>

            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-300 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-300 placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  Input your message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-300 placeholder-gray-400 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info for Mobile */}
        <div className="lg:hidden mt-12 grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
            <p className="text-gray-600">+254 700 000 000</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Sun 24/7</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600">hello@ribafarms.com</p>
            <p className="text-sm text-gray-500 mt-1">Quick response guaranteed</p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Agriculture Together?
            </h3>
            <p className="text-xl text-green-100 mb-8">
              Whether you are a farmer looking to connect with buyers, an investor interested in AgTech, or someone passionate about sustainable agriculture - we would love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-green-100">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Kenya & Beyond</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}