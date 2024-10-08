import React, { useEffect, useState, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import './AboutPage.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import EthiopianTourism from '../image/9.jpg';

const AboutPage = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = footerRef.current?.offsetTop;

    if (footerPosition && scrollPosition >= footerPosition) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="relative h-60">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(https://png.pngtree.com/thumb_back/fw800/background/20220217/pngtree-simple-atmosphere-black-line-promotion-background-image_954276.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-4xl font-bold text-white relative z-10 flex justify-center items-center h-full font-poppins">
              <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                ABOUT ETHIOPIAN TOURISM
              </motion.div>
            </h1>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-opacity-20 bg-blue-500 rounded-full w-40 h-40 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6">
          {/* Main Content */}
          <div className="mt-6 overflow-auto">
            <p className="text-lg mb-4 font-lora">
              Welcome to Ethiopian Tourism, where adventure meets culture. Discover the rich heritage, stunning landscapes, and warm hospitality that make Ethiopia a must-visit destination.
            </p>
            <h2 className="text-3xl font-bold mb-4 font-poppins animate-fade-in">
              Our Mission
            </h2>
            <p className="text-lg mb-4 font-lora animate-fade-in">
              Our mission is to promote Ethiopia as a premier travel destination by showcasing its unique attractions, vibrant cultures, and breathtaking landscapes. We strive to connect travelers with authentic experiences that highlight the beauty of our country.
            </p>
          </div>
          <h2 className="text-3xl font-bold mb-4 font-poppins animate-fade-in">
            Our Services
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            <div className="lg:w-1/2 space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in">
                <h3 className="text-2xl font-semibold mb-2 font-poppins flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Tour Planning
                </h3>
                <p className="font-lora">
                  Our expert team helps you plan unforgettable tours across Ethiopia, from the historical sites of Axum to the natural wonders of the Simien Mountains.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in">
                <h3 className="text-2xl font-semibold mb-2 font-poppins flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Cultural Experiences
                </h3>
                <p className="font-lora">
                  Immerse yourself in the rich cultural traditions of Ethiopia through unique experiences, including local cuisine, music, and festivals.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in">
                <h3 className="text-2xl font-semibold mb-2 font-poppins flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Adventure Activities
                </h3>
                <p className="font-lora">
                  From hiking to coffee tours, we offer a variety of adventure activities to explore Ethiopia’s natural beauty and vibrant wildlife.
                </p>
              </div>
            </div>
            {/* Image beside Our Services */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src={EthiopianTourism} // Replace with your desired image URL
                alt="Our Services"
                className="rounded-lg w-full h-auto object-cover transition-transform transform hover:scale-105 animate-fade-in"
              />
            </div>
          </div>
          <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4 mt-8 font-poppins animate-fade-in">
              Why Choose Ethiopian Tourism?
            </h2>
            <ul className="list-disc list-inside mb-4 font-lora">
              <li className="text-lg flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-500" />{' '}
                <b>Rich Cultural Heritage:</b> <i>Experience the diverse cultures and traditions that make Ethiopia unique.</i>
              </li>
              <li className="text-lg flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-500" />{' '}
                <b>Stunning Landscapes:</b> <i>Explore breathtaking views from the highlands to the valleys and everything in between.</i>
              </li>
              <li className="text-lg flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-500" />{' '}
                <b>Expert Guidance:</b> <i>Our experienced guides ensure you have a safe and memorable travel experience.</i>
              </li>
              <li className="text-lg flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-500" />{' '}
                <b>Customizable Packages:</b> <i>We tailor our services to meet your travel preferences and budget.</i>
              </li>
            </ul>
            <p className="text-lg font-lora animate-fade-in">
              At Ethiopian Tourism, we are committed to making your travel experience extraordinary. Contact us to learn more about how we can help you explore the wonders of Ethiopia.
            </p>
          </div>

          {/* Vision and Goal Section */}
          <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4 font-poppins animate-fade-in">
              Vision and Goal
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white space-y-6">
              <p className="text-lg font-lora">
                Our vision is to position Ethiopia as a top travel destination globally, known for its rich culture, heritage, and natural beauty. We aim to inspire travelers to discover the unique experiences that our country offers.
              </p>
              <p className="text-lg font-lora">
                Our goal is to provide comprehensive tourism services that facilitate seamless travel experiences, ensuring every visitor leaves with cherished memories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer
        ref={footerRef}
        className={`transition-all duration-1000 ease-in-out transform ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{ position: 'relative', zIndex: 0 }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
