'use client';

import { ArrowRight, UserPlus, Search, ShoppingCart, TrendingUp, BookOpen, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

export default function HowRibaWorksSection() {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: 'Sign Up & Get Started',
      description: 'Create your account as a farmer, buyer, or both. Complete your profile and tell us about your agricultural interests.',
      color: 'bg-green-500',
      image: '/assets/farmer1.jpg'
    },
    {
      id: 2,
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: 'Learn & Level Up',
      description: 'Access RibaLearn to master modern farming techniques. Complete challenges, earn badges, and progress from Seedling to Farm Legend.',
      color: 'bg-blue-500',
      image: '/assets/hero1.jpg'
    },
    {
      id: 3,
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'Discover & Connect',
      description: 'Browse our marketplace to find fresh produce or connect with buyers. Use AI-powered recommendations for the best matches.',
      color: 'bg-purple-500',
      image: '/assets/market.jpg'
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      title: 'Trade & Transact',
      description: 'Complete secure transactions through our integrated payment system. Track orders and build lasting business relationships.',
      color: 'bg-orange-500',
      image: '/assets/farmer2.jpg'
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: 'AI-Powered Insights',
      description: 'Get personalized crop recommendations based on your location, soil conditions, and market demand.'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: 'Financial Services',
      description: 'Access banking, loans, and insurance services designed specifically for agricultural needs.'
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Community Support',
      description: 'Join a thriving community of farmers and buyers sharing knowledge and building connections.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How <span className="text-green-600">Riba</span> Works
            </h2>
            {/* Green underline accent */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From registration to revenue, discover how RibaFarms transforms the agricultural experience through our simple, powerful platform.
          </p>
        </div>

        {/* Steps Process */}
        <div className="relative mb-20">
          {/* Desktop Steps */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Card */}
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    {/* Step Number */}
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Image */}
                    <div className="mt-6 rounded-xl overflow-hidden">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose RibaFarms?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with agricultural expertise to deliver unmatched value to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Agricultural Journey?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and buyers who are already experiencing the future of agriculture with RibaFarms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="group bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Get Started Today
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/marketplace">
                <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                  Explore Marketplace
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}