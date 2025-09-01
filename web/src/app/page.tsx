import { Sprout, Users, TrendingUp, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-green-800">RibaFarms</span>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-green-700 hover:text-green-800 transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              World's First Gamified Agricultural Marketplace
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                RibaFarms
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Empowering farmers through technology. Connect directly with buyers, 
              access financial services, and learn modern farming techniques - all 
              while earning rewards and leveling up your farming game! 🌱
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Marketplace</h3>
              <p className="text-gray-600">
                Connect directly with buyers, eliminate middlemen, and get fair prices for your crops. 
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Get personalized crop recommendations based on your location, soil, and market demand. It's giving smart farming! 🤖
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gamified Learning</h3>
              <p className="text-gray-600">
                Level up from Seedling to Farm Legend while learning modern agriculture. Education that doesn't miss! 🎮
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Join the Agricultural Revolution</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1M+</div>
                <div className="text-gray-600">Target Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-gray-600">Crop Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-gray-600">Platform Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Fair Trade</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your farming journey? Let's grow together! 🌾
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join as Farmer 🧑‍🌾
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join as Buyer 🛒
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8 border-t border-green-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Sprout className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-green-800">© 2025 RibaFarms</span>
          </div>
          <div className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-green-600 transition-colors">About</a>
            <a href="#" className="hover:text-green-600 transition-colors">Features</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-green-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}