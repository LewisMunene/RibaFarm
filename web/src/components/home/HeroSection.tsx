'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: '/assets/market.jpg',
      title: 'Freshly handpicked from farmers to you',
      subtitle: 'Where Agriculture Meets Convenience in Every Step',
      description: 'Welcome to RibaFarms - Nurturing the Future of Organic Farming',
      cta: 'Explore Marketplace',
      ctaLink: '/marketplace'
    },
    {
      image: '/assets/hero1.jpg',
      title: 'Be Healthy and Eat Only Fresh Produce',
      subtitle: 'Connecting Farmers Directly to Consumers',
      description: 'At RibaFarms, we\'re sowing the seeds of change',
      cta: 'Start Your Journey',
      ctaLink: '/auth/register'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? 'opacity-100 scale-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 scale-105 -translate-x-full'
                : 'opacity-0 scale-105 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Green Gradient Overlay for brand consistency */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-green-800/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl">
                  {/* Animated Content */}
                  <div
                    className={`transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Subtitle */}
                    {slide.subtitle && (
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        {slide.subtitle}
                      </div>
                    )}

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      <span className="block">{slide.title}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={slide.ctaLink}>
                        <button className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                          {slide.cta}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                      
                      <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20">
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        Watch Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <button
          onClick={prevSlide}
           aria-label="Prev slide"
          className="group p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <button
          onClick={nextSlide}
           aria-label="Next slide"
          className="group p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-green-600/80 text-white'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          <Play
            className={`w-4 h-4 transition-transform duration-300 ${
              isAutoPlaying ? 'scale-100' : 'scale-90'
            }`}
          />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-8 z-10 hidden lg:block">
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="text-sm">
            <p className="font-semibold">Fresh Delivery</p>
            <p className="text-white/70">Farm to table in 24hrs</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 z-10 hidden lg:block">
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="text-sm">
            <p className="font-semibold">100% Organic</p>
            <p className="text-white/70">Naturally grown</p>
          </div>
        </div>
      </div>

      
    </section>
  );
}