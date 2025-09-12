'use client';

import { ArrowRight, UserPlus, BookOpen, Search, ShoppingCart, TrendingUp, DollarSign, Users, Award, Target, Star, Zap, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function HowRibaWorksSection() {
  const userTypes = [
    {
      title: "For Farmers",
      color: "bg-green-600",
      steps: [
        {
          number: "1",
          title: "Become a RibaFarms Partner",
          description: "Join our community of farmers and sellers by expressing your interest to become a RibaFarms partner.",
          icon: <UserPlus className="w-7 h-7 text-green-600" />
        },
        {
          number: "2", 
          title: "List Your Products",
          description: "List your fresh, organic produce in our marketplace, allowing buyers to discover and purchase your products.",
          icon: <Search className="w-7 h-7 text-blue-600" />
        },
        {
          number: "3",
          title: "Level Up Through Learning",
          description: "Complete interactive quizzes, participate in challenges, and progress from Entry → Novice → Expert levels. Earn points and badges for mastering agricultural techniques!",
          icon: <BookOpen className="w-7 h-7 text-purple-600" />
        },
        {
          number: "4",
          title: "Optimize Your Farming Practices", 
          description: "Utilize RibaFarms' AI-powered recommendations and data analytics to enhance your farming practices, track sales and inventory to make informed decisions.",
          icon: <TrendingUp className="w-7 h-7 text-orange-600" />
        }
      ]
    },
    {
      title: "For Buyers",
      color: "bg-blue-600", 
      steps: [
        {
          number: "1",
          title: "Explore Our Marketplace",
          description: "Start by browsing RibaFarms' extensive marketplace to discover a wide array of fresh, organic agricultural products.",
          icon: <Search className="w-7 h-7 text-blue-600" />
        },
        {
          number: "2",
          title: "Can't Find a Product?", 
          description: "If you can't find the specific product you're looking for, simply reach out to our dedicated team.",
          icon: <Target className="w-7 h-7 text-red-600" />
        },
        {
          number: "3",
          title: "Personalized Assistance",
          description: "We will connect you with local farmers who can meet your specific needs, ensuring you get the organic food you desire.",
          icon: <Users className="w-7 h-7 text-green-600" />
        },
        {
          number: "4",
          title: "Hassle-Free Purchases",
          description: "RibaFarms simplifies the buying process, offering secure and convenient payment options. Enjoy fresh produce directly from local farmers.",
          icon: <ShoppingCart className="w-7 h-7 text-purple-600" />
        }
      ]
    },
    {
      title: "For Investors", 
      color: "bg-purple-600",
      steps: [
        {
          number: "1",
          title: "Explore Investment Opportunities",
          description: "Begin by exploring RibaFarms' platform and gaining insights into the diverse investment opportunities in the agricultural sector.",
          icon: <TrendingUp className="w-7 h-7 text-green-600" />
        },
        {
          number: "2",
          title: "Reach Out to Our Team",
          description: "Contact our dedicated team to express your interest and discuss potential investment options. We are here to answer your questions.",
          icon: <Users className="w-7 h-7 text-blue-600" />
        },
        {
          number: "3", 
          title: "Customize Your Investment",
          description: "Work with our experts to customize your investment plan to align with your financial goals and preferences, whether supporting sustainable farming practices or AgTech innovation.",
          icon: <Target className="w-7 h-7 text-purple-600" />
        },
        {
          number: "4",
          title: "Invest with Confidence", 
          description: "Once you've decided on your investment strategy, securely invest in RibaFarms and become a part of our mission to transform agriculture.",
          icon: <Award className="w-7 h-7 text-yellow-600" />
        }
      ]
    }
  ];

  const gamificationFeatures = [
    {
      icon: <Trophy className="w-10 h-10 text-yellow-500" />,
      title: "Level Progression",
      description: "Entry → Novice → Expert → Farm Legend",
      color: "bg-gradient-to-br from-yellow-50 to-orange-50",
      border: "border-yellow-200"
    },
    {
      icon: <Star className="w-10 h-10 text-purple-500" />,
      title: "Achievement Badges", 
      description: "Earn badges for completing courses and challenges",
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
      border: "border-purple-200"
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Daily Challenges",
      description: "Interactive quizzes and farming challenges",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50",
      border: "border-blue-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How <span className="text-green-600">RibaFarms</span> Works
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From registration to revenue, discover how RibaFarms transforms the agricultural experience through our simple, powerful platform.
          </p>
        </div>

        {/* User Type Flows */}
        <div className="space-y-20">
          {userTypes.map((userType, typeIndex) => (
            <div key={typeIndex} className="relative">
              {/* User Type Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center px-6 py-3 ${userType.color} text-white rounded-full font-semibold text-lg mb-4 shadow-lg`}>
                  {userType.title}
                </div>
              </div>

              {/* Steps for Desktop */}
              <div className="hidden lg:block">
                <div className="grid lg:grid-cols-4 gap-8">
                  {userType.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="relative">
                      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-green-200 h-full relative overflow-hidden">
                        {/* Rainbow gradient top border */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-t-3xl"></div>
                        
                        {/* Step Number Circle */}
                        <div className={`w-14 h-14 ${userType.color} text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto shadow-lg`}>
                          {step.number}
                        </div>

                        {/* Step Icon - NOW VISIBLE! */}
                        <div className="flex justify-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-white group-hover:to-gray-50 transition-all duration-300 border-2 border-gray-200 group-hover:border-gray-300 shadow-md">
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Step Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-center leading-relaxed text-sm">
                          {step.description}
                        </p>

                        {/* Subtle bottom accent */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Arrow Connector */}
                      {stepIndex < userType.steps.length - 1 && (
                        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden lg:block">
                          <div className="w-10 h-10 bg-white border-2 border-green-200 rounded-full flex items-center justify-center shadow-lg">
                            <ArrowRight className="w-5 h-5 text-green-500" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps for Mobile */}
              <div className="lg:hidden space-y-6">
                {userType.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-green-200 transition-all duration-300 relative overflow-hidden">
                    {/* Rainbow gradient top border */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-t-2xl"></div>
                    
                    <div className="flex items-start gap-4 mt-2">
                      <div className={`w-12 h-12 ${userType.color} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border-2 border-gray-200 shadow-sm">
                            <div className="scale-75">
                              {step.icon}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gamification Features Section */}
        <div className="mt-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-12 border-2 border-gradient-to-r from-green-200 to-purple-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Learn & Earn Through Gamification 🎮
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your agricultural journey into an engaging adventure! Complete challenges, earn badges, and level up your farming expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gamificationFeatures.map((feature, index) => (
              <div key={index} className={`${feature.color} ${feature.border} border-2 rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sample Learning Progression */}
          <div className="mt-12 bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Your Learning Journey
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {['Entry Level', 'Novice', 'Expert', 'Farm Legend'].map((level, index) => (
                <div key={index} className="flex items-center">
                  <div className={`px-6 py-3 rounded-full font-semibold shadow-lg border-2 ${
                    index === 0 ? 'bg-green-100 text-green-700 border-green-200' :
                    index === 1 ? 'bg-blue-100 text-blue-700 border-blue-200' :
                    index === 2 ? 'bg-purple-100 text-purple-700 border-purple-200' :
                    'bg-yellow-100 text-yellow-700 border-yellow-200'
                  }`}>
                    {level}
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl border-4 border-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Agricultural Journey?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers, buyers, and investors who are already experiencing the future of agriculture with RibaFarms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="group bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-green-200">
                  Get Started Today
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/marketplace">
                <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg">
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