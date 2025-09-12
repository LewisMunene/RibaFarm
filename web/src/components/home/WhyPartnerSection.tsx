'use client';

import { TrendingUp, Globe, BarChart3, Users, Zap, Heart, ShoppingCart, Activity, Truck } from 'lucide-react';
import Link from 'next/link';

export default function WhyPartnerSection() {
  const partnerGroups = [
    {
      id: 'investors',
      title: 'Investors:',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      ctaText: "Let's Discuss",
      ctaLink: '/contact',
      ctaColor: 'bg-green-600 hover:bg-green-700',
      subtitle: "Ready to Invest in Agriculture's Future?",
      benefits: [
        {
          icon: <Users className="w-8 h-8 text-orange-600" />,
          title: 'Access to a Vast User Base',
          description: 'Investors can benefit from Riba\'s large and engaged user base, potentially increasing the value of their investments.'
        },
        {
          icon: <Globe className="w-8 h-8 text-orange-600" />,
          title: 'Market Expansion',
          description: 'Partnering with Riba allows investors to tap into the growing agricultural and organic food market, potentially leading to higher returns.'
        },
        {
          icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
          title: 'Data-Driven Insights',
          description: 'Riba\'s data analytics capabilities can provide valuable insights for investors to make informed decisions and maximize their investments.'
        }
      ]
    },
    {
      id: 'farmers',
      title: 'Farmers:',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      ctaText: 'Reach Out Today',
      ctaLink: '/auth/register',
      ctaColor: 'bg-green-600 hover:bg-green-700',
      subtitle: 'Ready to grow your sales today?',
      benefits: [
        {
          icon: <TrendingUp className="w-8 h-8 text-green-600" />,
          title: 'Market Expansion',
          description: 'Farmers partnering with Riba can access a broader customer base, increasing their market reach and potential sales.'
        },
        {
          icon: <Zap className="w-8 h-8 text-green-600" />,
          title: 'Streamlined Operations',
          description: 'Farmers partnering with Riba can access a broader customer base, increasing their market reach and potential sales.'
        },
        {
          icon: <Heart className="w-8 h-8 text-green-600" />,
          title: 'Inclusivity',
          description: 'Riba supports small-scale and local farmers, ensuring that even those with limited resources can thrive in the agricultural sector.'
        }
      ]
    },
    {
      id: 'buyers',
      title: 'Buyers:',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      ctaText: 'Talk to Us',
      ctaLink: '/marketplace',
      ctaColor: 'bg-green-600 hover:bg-green-700',
      subtitle: 'Seeking Fresh, Organic Goodness?',
      benefits: [
        {
          icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
          title: 'Access to Fresh, Organic Produce',
          description: 'Buyers benefit from easy access to high-quality organic agricultural produce through Riba\'s marketplace.'
        },
        {
          icon: <Activity className="w-8 h-8 text-blue-600" />,
          title: 'Data-Driven Insights',
          description: 'Riba\'s data analytics ensure buyers can make informed choices based on product trends and preferences.'
        },
        {
          icon: <Truck className="w-8 h-8 text-blue-600" />,
          title: 'Convenience and Efficiency',
          description: 'Riba streamlines the buying process, making it easier and more convenient for consumers to access organic food.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why partner with{' '}
              <span className="text-green-600">Riba</span>
              <span className="text-gray-900">?</span>
            </h2>
            {/* Orange underline accent */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique advantages that RibaFarms offers to investors, farmers, and buyers in our revolutionary agricultural ecosystem.
          </p>
        </div>

        {/* Partner Groups */}
        <div className="space-y-20">
          {partnerGroups.map((group, groupIndex) => (
            <div key={group.id} className="relative">
              {/* Group Header */}
              <div className="mb-12">
                <h3 className={`text-3xl font-bold ${group.color} mb-2`}>
                  {group.title}
                </h3>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {group.benefits.map((benefit, index) => (
                  <div key={index} className={`group p-8 rounded-2xl ${group.bgColor} border-2 ${group.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 p-4 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className={`inline-block p-8 rounded-2xl ${group.bgColor} border-2 ${group.borderColor}`}>
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    {group.subtitle}
                  </p>
                  <Link href={group.ctaLink}>
                    <button className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white ${group.ctaColor}`}>
                      {group.ctaText}
                    </button>
                  </Link>
                </div>
              </div>

              {/* Divider Line (except for last group) */}
              {groupIndex < partnerGroups.length - 1 && (
                <div className="mt-20 flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Image Gallery */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/farmer1.jpg"
                alt="Fresh produce harvest"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Fresh Harvest</p>
                <p className="text-sm opacity-90">Quality guaranteed</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/market.jpg"
                alt="Organic marketplace"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Organic Market</p>
                <p className="text-sm opacity-90">Direct from farmers</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/hero1.jpg"
                alt="Sustainable farming"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Sustainable Growth</p>
                <p className="text-sm opacity-90">Future of farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}