"use client"
import { useState } from "react";
import { Sprout, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call (you'll replace with Supabase later)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Password reset requested for:", email);
      // TODO: Add Supabase password reset logic here
    }, 2000);
  };

  // Success state after email sent
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navbar at the very top */}
        <Navbar currentPage="forgot-password" />
        
        {/* Main content */}
        <div className="flex items-center justify-center px-4 py-8 relative overflow-hidden">
          {/* Background Image - Right Side */}
          <div className="absolute right-4 top-4 bottom-4 w-1/2 z-0">
            <img 
              src="/assets/farmer3.jpg" 
              alt="Farmer illustration" 
              className="w-full h-full object-cover opacity-100 rounded-3xl shadow-lg"
            />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-6xl flex items-center">
            <div className="max-w-md w-full">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <img 
                    src="/assets/Logo.png" 
                    alt="RibaFarms Logo" 
                    className="w-25 h-25"
                  />
                  <span className="text-3xl font-bold text-green-800">RibaFarms</span>
                </div>
              </div>

              {/* Success Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Check your email!</h1>
                
                <p className="text-gray-600 mb-6">
                  We've sent password reset instructions to{" "}
                  <span className="font-semibold text-green-700">{email}</span>
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-green-800">
                    <strong>Pro tip:</strong> Check your spam folder if you don't see the email within a few minutes!
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200"
                  >
                    Send again
                  </button>
                  
                  <Link 
                    href="/auth/login"
                    className="block w-full text-center py-3 text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Back to Log in
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Still having trouble? Contact our support team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main forgot password form
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar at the very top */}
      <Navbar currentPage="forgot-password" />
      
      {/* Main content */}
      <div className="flex items-center justify-center px-4 py-8 relative overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-4 top-4 bottom-4 w-1/2 z-0">
          <img 
            src="/assets/farmer3.jpg" 
            alt="Farmer illustration" 
            className="w-full h-full object-cover opacity-100 rounded-3xl shadow-lg"
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-6xl flex items-center">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img 
                  src="/assets/Logo.png" 
                  alt="RibaFarms Logo" 
                  className="w-25 h-25"
                />
                <span className="text-3xl font-bold text-green-800">RibaFarms</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot your password?</h1>
              <p className="text-gray-600">No worries! We'll send you reset instructions</p>
            </div>

            {/* Forgot Password Form */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-xl">
              {/* Back to Login Link */}
              <Link 
                href="/auth/login" 
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </Link>

              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium"
                      placeholder="Enter your email address"
                      disabled={isLoading}
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Enter the email address associated with your RibaFarms account
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!email || isLoading}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending instructions...
                    </div>
                  ) : (
                    "Send reset instructions"
                  )}
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800">
                  <strong>Remember:</strong> Password reset links expire after 24 hours for security. 
                  Make sure to check your spam folder too!
                </p>
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">
                Still can't access your account?
              </p>
              <Link 
                href="/support" 
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Contact our support team
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Empowering farmers through technology</p>
              <p className="mt-1">© 2025 RibaFarms. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}