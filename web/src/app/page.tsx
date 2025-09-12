import { Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyPartnerSection from "@/components/home/WhyPartnerSection";
import HowRibaWorksSection from "@/components/home/HowRibaWorksSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar currentPage="home" />

      {/* Hero Section with Carousel */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection/>

      {/*WhyPartner Sections*/}
      <WhyPartnerSection/>

      {/*HowRibaWorksSection*/}
      <HowRibaWorksSection/>

      {/* Main Content Sections */}
      <main>
        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Why Choose RibaFarms
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Revolutionizing Agriculture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of farming with our comprehensive platform that connects, educates, and empowers farmers across Kenya.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Marketplace</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect directly with buyers, eliminate middlemen, and secure fair prices for your crops. Our platform ensures transparent transactions and builds lasting partnerships.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get personalized crop recommendations based on your location, soil conditions, weather patterns, and market demand. Smart farming made accessible for everyone.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gamified Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Level up from Seedling to Farm Legend while mastering modern agriculture techniques. Earn badges, compete with peers, and unlock new opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join the Agricultural Revolution
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be part of a growing community that's transforming how agriculture works in Kenya and beyond.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1M+
                </div>
                <div className="text-gray-600 font-medium">Target Farmers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Crop Types</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Platform Access</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Fair Trade</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Farming Journey?
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Join thousands of farmers who are already growing smarter, selling better, and earning more with RibaFarms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="group bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Join as Farmer
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">🌾</span>
                </button>
              </Link>
              <Link href="/auth/register">
                <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                  Join as Buyer
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">🛒</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}