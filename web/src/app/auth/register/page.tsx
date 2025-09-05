"use client"
import { useState } from "react";
import { Sprout, Mail, Lock, Eye, EyeOff, User, MapPin, Tractor, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    
    // User Type & Location
    userType: "",
    county: "",
    subCounty: "",
    
    // Farming Info (for farmers)
    farmingExperience: "",
    farmSize: "",
    primaryCrops: [] as string[],
    
    // Agreements
    termsAccepted: false,
    marketingEmails: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ""}));
    }
  };

  const handleCropToggle = (crop: string) => {
    setFormData(prev => ({
      ...prev,
      primaryCrops: prev.primaryCrops.includes(crop)
        ? prev.primaryCrops.filter(c => c !== crop)
        : [...prev.primaryCrops, crop]
    }));
  };

  const validateStep1 = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.userType) newErrors.userType = "Please select your role";
    if (!formData.county) newErrors.county = "County is required";
    if (!formData.termsAccepted) newErrors.terms = "You must accept the terms";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      console.log("Registration data:", formData);
      // TODO: Add Supabase registration logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute right-4 top-4 bottom-4 w-1/2 z-0">
        <img 
          src="/assets/farmer1.jpg" 
          alt="Farmer illustration" 
          className="w-full h-full object-cover opacity-60 rounded-3xl shadow-lg"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl flex items-center">
        <div className="max-w-lg w-full">
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Join the agricultural revolution! 🚀</h1>
            <p className="text-gray-600">Create your account and start growing with us</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-700">Step {currentStep} of 2</span>
              <span className="text-sm text-gray-500">{currentStep === 1 ? "Basic Info" : "Tell us about you"}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-green-100 shadow-xl">
            
            {/* STEP 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium"
                    placeholder="+254 700 000 000"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Use 8+ characters with letters, numbers & symbols</p>
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium ${
                        errors.confirmPassword ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>

                {/* Continue Button with Validation */}
                <button
                  onClick={handleNext}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.password || formData.password !== formData.confirmPassword || formData.password.length < 8}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600"
                >
                  Continue to Step 2 ✨
                </button>
              </div>
            )}

            {/* STEP 2: User Type & Additional Info */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">I am joining as:</label>
                  <div className="grid grid-cols-1 gap-3">
                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="farmer"
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-xl p-4 transition-all ${
                        formData.userType === "farmer" 
                          ? "border-green-500 bg-green-50" 
                          : "border-gray-200 hover:border-green-300"
                      }`}>
                        <div className="flex items-center gap-3">
                          <Tractor className="w-6 h-6 text-green-600" />
                          <div>
                            <div className="font-semibold text-gray-900">Farmer 🧑‍🌾</div>
                            <div className="text-sm text-gray-600">I grow and sell agricultural products</div>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="buyer"
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-xl p-4 transition-all ${
                        formData.userType === "buyer" 
                          ? "border-blue-500 bg-blue-50" 
                          : "border-gray-200 hover:border-blue-300"
                      }`}>
                        <div className="flex items-center gap-3">
                          <ShoppingCart className="w-6 h-6 text-blue-600" />
                          <div>
                            <div className="font-semibold text-gray-900">Buyer 🛒</div>
                            <div className="text-sm text-gray-600">I purchase agricultural products</div>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="both"
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-xl p-4 transition-all ${
                        formData.userType === "both" 
                          ? "border-purple-500 bg-purple-50" 
                          : "border-gray-200 hover:border-purple-300"
                      }`}>
                        <div className="flex items-center gap-3">
                          <User className="w-6 h-6 text-purple-600" />
                          <div>
                            <div className="font-semibold text-gray-900">Both 💼</div>
                            <div className="text-sm text-gray-600">I buy and sell agricultural products</div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  {errors.userType && <p className="mt-2 text-sm text-red-600">{errors.userType}</p>}
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">County</label>
                    <select
                      name="county"
                      title="Select your county"
                      value={formData.county}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 font-medium ${
                        errors.county ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select County</option>
                      <option value="nairobi">Nairobi</option>
                      <option value="kiambu">Kiambu</option>
                      <option value="nakuru">Nakuru</option>
                      <option value="meru">Meru</option>
                      <option value="kakamega">Kakamega</option>
                    </select>
                    {errors.county && <p className="mt-1 text-sm text-red-600">{errors.county}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sub County</label>
                    <input
                      name="subCounty"
                      type="text"
                      value={formData.subCounty}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 font-medium"
                      placeholder="Your sub county"
                    />
                  </div>
                </div>

                {/* Farming Experience (only for farmers) */}
                {(formData.userType === "farmer" || formData.userType === "both") && (
                  <div className="space-y-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <h3 className="font-semibold text-green-800">Tell us about your farming journey 🌱</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Farming Experience</label>
                      <select
                        name="farmingExperience"
                        title="Select your farming experience level"
                        value={formData.farmingExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 bg-white text-gray-900 font-medium"
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Complete beginner (0-1 years)</option>
                        <option value="some">Some experience (2-5 years)</option>
                        <option value="experienced">Experienced (5+ years)</option>
                        <option value="expert">Expert farmer (10+ years)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size (acres)</label>
                      <input
                        name="farmSize"
                        type="number"
                        step="0.1"
                        value={formData.farmSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 bg-white text-gray-900 placeholder-gray-500 font-medium"
                        placeholder="e.g., 2.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">What do you grow? (select all that apply)</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Maize", "Beans", "Tomatoes", "Kale", "Onions", "Potatoes"].map(crop => (
                          <button
                            key={crop}
                            type="button"
                            onClick={() => handleCropToggle(crop)}
                            className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                              formData.primaryCrops.includes(crop)
                                ? "bg-green-100 border-green-500 text-green-800"
                                : "bg-white border-gray-300 text-gray-700 hover:border-green-400"
                            }`}
                          >
                            {crop}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms & Conditions */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-green-600 hover:text-green-700 font-medium">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 font-medium">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.terms && <p className="text-sm text-red-600">{errors.terms}</p>}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingEmails"
                      checked={formData.marketingEmails}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Send me farming tips, market updates, and platform news (optional but recommended! 💚)
                    </span>
                  </label>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 border-2 border-green-600 text-green-700 py-3 px-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.termsAccepted || !formData.userType || !formData.county}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Create Account 🚀
                  </button>
                </div>
              </div>
            )}

            {/* Already have account */}
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already growing with us?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-lg transition-colors"
              >
                Sign in to your account
                <span className="text-xl">🌾</span>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Creating an inclusive space for all farmers 💚</p>
            <p className="mt-1">© 2025 RibaFarms. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}