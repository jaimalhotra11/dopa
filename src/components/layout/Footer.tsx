import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#116DEC] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DOPAMINE</h3>
            <p className="mb-4">Where fitness meets happiness. Transform your body and mind with us.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-200"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-200"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-200"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-200"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-200 block">About Us</Link></li>
              <li><Link to="/facilities" className="hover:text-gray-200 block">Facilities</Link></li>
              <li><Link to="/trainers" className="hover:text-gray-200 block">Trainers</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-200 block">Membership</Link></li>
              <li><Link to="/careers" className="hover:text-gray-200 block">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>204 second floor, vipul plaza, Sector 81, Faridabad, Haryana 121004</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 95600-33156, 95600-33157</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@dopamine.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe for latest updates and offers</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg w-full text-gray-900"
              />
              <button className="bg-white text-[#116DEC] px-4 py-2 rounded-lg hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} DOPAMINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;