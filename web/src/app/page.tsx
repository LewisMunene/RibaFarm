import { Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyPartnerSection from "@/components/home/WhyPartnerSection";
import HowRibaWorksSection from "@/components/home/HowRibaWorksSection";
import ContactFormSection from "@/components/home/ContactFormSection";

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

      {/* Contact Form Section */}
      <ContactFormSection/>

      

      {/* Footer */}
      <Footer />
    </div>
  );
}