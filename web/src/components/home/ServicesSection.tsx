'use client';

import { ArrowRight, ShoppingCart, DollarSign, GraduationCap, Tractor } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 'marketplace',
      title: 'Riba Marketplace',
      image: '/assets/market.jpg',
      borderColor: 'border-orange-400',
      accentColor: 'bg-orange-400',
      description: 'Welcome to the heart of organic farming - The Riba Organic Marketplace is more than a platform; it\'s a revolution in the way organic produce is traded globally.',
      features: [
        {
          icon: '🌾',
          text: 'For buyers, we bring nature\'s finest to your table. Our carefully curated marketplace connects you with dedicated organic farmers, offering fresh, sustainable produce straight from the field.'
        },
        {
          icon: '📦',
          text: 'Immerse yourself in our marketplace brimming with fresh, high-quality, organic produce. At Riba, every product is a taste of Africa\'s rich natural heritage.'
        },
        {
          icon: '🌍',
          text: 'Unveil your organic bounty to a network of health-conscious buyers worldwide. Our AI insights guide you, the farmer, to cultivate the right crops for the right market, maximizing your yield and profitability.'
        },
        {
          icon: '🚚',
          text: 'Products in Riba\'s Organic Marketplace are verified to uphold the highest organic standards, ensuring trust and transparency. We coordinate end-to-end shipping, delivering fresh, organic produce to your doorstep, wherever you are in the world.'
        }
      ],
      ctaText: 'View marketplace',
      ctaLink: '/marketplace'
    },
    {
      id: 'finance',
      title: 'Riba Finance',
      image: '/assets/hero1.jpg',
      borderColor: 'border-blue-400',
      accentColor: 'bg-blue-400',
      description: 'Welcome to Riba Finance, where financial growth and security sprout together.',
      features: [
        {
          icon: '🏦',
          text: 'Our virtual banking services are meticulously designed for your unique agricultural needs, empowering your farming endeavors with flexible, bespoke financial solutions.'
        },
        {
          icon: '📈',
          text: 'For investors, Riba Finance offers a fertile ground for investment that\'s resilient against agricultural risks. Watch your contribution to sustainable farming grow securely and profitably.'
        },
        {
          icon: '🛡️',
          text: 'Farm fearlessly with our integrated crop insurance. Weather the uncertainties of farming and protect your yield against extreme weather, pests, and diseases. With Riba Finance, we\'ve got your crops covered.'
        },
        {
          icon: '🌱',
          text: 'Join us today for financial solutions that sow seeds of growth and plant roots of security in your farming future.'
        }
      ],
      ctaText: 'View Riba Finance',
      ctaLink: '/banking'
    },
    {
      id: 'learn',
      title: 'Riba Learn',
      image: '/assets/farmer1.jpg',
      borderColor: 'border-green-400',
      accentColor: 'bg-green-400',
      description: 'Welcome to Riba Learn - where technology meets tradition to redefine farming education through gamification.',
      features: [
        {
          icon: '🎮',
          text: 'Level up from Seedling to Farm Legend! Complete challenges, earn badges, and unlock new farming techniques in our gamified learning platform.'
        },
        {
          icon: '🏆',
          text: 'Compete with fellow farmers on regional leaderboards. Weekly challenges and daily quests keep you engaged while mastering modern agriculture.'
        },
        {
          icon: '🤖',
          text: 'AI-powered crop recommendations based on your location, soil, and market demand. Smart farming insights delivered through interactive lessons and quizzes.'
        },
        {
          icon: '👥',
          text: 'Join a community of learners, share progress, and get mentored by experienced farmers. Collaborative learning meets agricultural innovation.'
        }
      ],
      ctaText: 'Start Learning',
      ctaLink: '/learning'
    },
    {
      id: 'farms',
      title: 'Riba Farms',
      image: '/assets/farmer2.jpg',
      borderColor: 'border-green-600',
      accentColor: 'bg-green-600',
      description: 'Welcome to Riba Farms, where technology meets tradition to redefine farming.',
      features: [
        {
          icon: '📊',
          text: 'Maximize your yield with our AI that provides bespoke farming advice based on climate, soil, and market trends. Sow smarter with Riba Farms.'
        },
        {
          icon: '🔗',
          text: 'Step into the global marketplace with Riba Farms. Connect directly with buyers near and far, bypassing intermediaries and boosting your profits.'
        },
        {
          icon: '🚛',
          text: 'From your farm to the market, we streamline the shipping process. Your produce reaches its destination fresh, fast, and in prime condition.'
        },
        {
          icon: '🌟',
          text: 'Join us at Riba Farms. Discover how our innovative blend of AI and agricultural expertise can sow seeds of success on your farm.'
        }
      ],
      ctaText: 'View Riba Farms',
      ctaLink: '/farms'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">SERVICES</h2>
            {/* Orange underline accent */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to empower farmers, connect communities, and revolutionize how we think about farming.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              {/* Service Card */}
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border-4 ${service.borderColor} hover:shadow-2xl transition-all duration-300 group`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Side */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-80 lg:h-full">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Service Title Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full ${service.accentColor} flex items-center justify-center text-white flex-shrink-0 mt-1`}>
                            <span className="text-sm">{feature.icon}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href={service.ctaLink}>
                      <button className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white bg-green-600 hover:bg-green-700">
                        {service.ctaText}
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-lg transform rotate-12 opacity-70 group-hover:rotate-45 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
              
              {/* Corner Lines */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-4 left-0 w-8 h-px bg-orange-400"></div>
                <div className="absolute top-0 left-4 w-px h-8 bg-orange-400"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-4 right-0 w-8 h-px bg-green-400"></div>
                <div className="absolute bottom-0 right-4 w-px h-8 bg-green-400"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}