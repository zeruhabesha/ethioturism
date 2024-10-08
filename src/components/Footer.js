import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ isFixed }) => {
  return (
    <footer
      className={`bg-gray-900 text-white py-10 ${
        isFixed ? 'fixed bottom-0 left-0 right-0 z-10' : ''
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          Ethiopia Tourism
          <br />
          <h3 className="text-lg font-bold mb-3">About Ethiopian Tourism</h3>
          <p className="text-gray-400 text-sm">
            Ethiopian Tourism offers a journey through ancient history, diverse landscapes, and vibrant cultures. Discover stunning landmarks like Lalibela, the Simien Mountains, and the Omo Valley, while experiencing the rich heritage that defines Ethiopia.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <a
                href="/about"
                className="hover:text-white no-underline transition duration-300 ease-in-out transform hover:scale-105"
              >
                About Ethiopia
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/destinations"
                className="hover:text-white no-underline transition duration-300 ease-in-out transform hover:scale-105"
              >
                Top Destinations
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/tours"
                className="hover:text-white no-underline transition duration-300 ease-in-out transform hover:scale-105"
              >
                Tours and Packages
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/support"
                className="hover:text-white no-underline transition duration-300 ease-in-out transform hover:scale-105"
              >
                Visitor Support
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white no-underline transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Info</h3>
          <p className="text-gray-400 text-sm">Email: info@ethiopiantourism.com</p>
          <p className="text-gray-400 text-sm">Phone: +251-911-123-789</p>
          <p className="text-gray-400 text-sm mb-4">
            Address: Ethiopian Tourism HQ, Bole Subcity, Addis Ababa, Ethiopia
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Ethiopian Tourism. All rights reserved. Explore the beauty and heritage of Ethiopia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
