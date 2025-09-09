'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/Logo.png" 
                alt="RibaFarms Logo" 
                className="h-25 w-25"
              />
              <span className="text-2xl font-bold text-green-800">RibaFarms</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Empowering farmers through technology. The world's first gamified agricultural marketplace connecting farmers directly with buyers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-gray-600 hover:text-green-600 transition-colors">
                  Learn & Earn
                </Link>
              </li>
              <li>
                <Link href="/banking" className="text-gray-600 hover:text-green-600 transition-colors">
                  Banking Services
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-600 hover:text-green-600 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-green-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-green-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-green-600 transition-colors">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-600 hover:text-green-600 transition-colors">
                  Send Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-600 flex-shrink-0" />
                <a href="mailto:hello@ribafarms.com" className="text-gray-600 hover:text-green-600 transition-colors">
                  hello@ribafarms.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                <a href="tel:+254700000000" className="text-gray-600 hover:text-green-600 transition-colors">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  Nairobi, Kenya<br />
                  East Africa
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-gray-900 font-medium mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2025 RibaFarms. All rights reserved. Made with love for farmers in Kenya.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-green-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-green-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Creating an inclusive space for all farmers. Building the future of agriculture, one harvest at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}