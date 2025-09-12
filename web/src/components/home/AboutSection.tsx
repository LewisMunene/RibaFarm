'use client';

import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Collage */}
          <div className="relative">
            {/* Main Large Image */}
            <div className="relative">
              <img 
                src="/assets/market.jpg" 
                alt="Fresh organic produce at market"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            
            </div>

            {/* Small Images Grid - Positioned Absolutely */}
            <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/hero1.jpg" 
                  alt="Farmer working in field"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/farmer1.jpg" 
                  alt="Fresh vegetables"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Phone Number Card */}
            <div className="absolute bottom-1/3 -left-8 bg-green-600 text-white rounded-2xl p-4 shadow-xl">
              <div className="text-sm font-medium">Call us now</div>
              <div className="text-lg font-bold">+254 XXXXXXXXX</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                Fresh Organic Produce
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Be Healthy and Eat Only{" "}
                <span className="text-green-600">Fresh Produce</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                RibaFarms is your one-stop solution for all things agriculture, connecting 
                farmers and consumers through a comprehensive suite of services. 
                Whether you're looking for fresh organic produce, need support with 
                farm management, or seeking financial assistance, RibaFarms has you covered.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                RibaFarms is more than just an app. It's a supportive community of farmers 
                and consumers. Join discussions, seek advice, and connect with 
                like-minded individuals who share your passion for agriculture.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                'Direct connection between farmers and consumers',
                'Fresh organic produce guaranteed quality',
                'Financial services and farm management support',
                'Community-driven agricultural knowledge sharing'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/marketplace">
                <button className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Agriculture Text */}
      <div className="mt-32">
        <div className="max-w-7xl mx-auto px-6">
          
        </div>
      </div>
    </section>
  );
}