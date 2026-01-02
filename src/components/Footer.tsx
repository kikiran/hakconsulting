import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    features: ['Our Services', 'Investment', 'Consulting'],
    learnLevel: ['FAQs', 'Privacy Policy', 'Terms and Conditions'],
    support: ['Contact Us', 'Support Center'],
  };

  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <span className="text-white font-bold">HAK</span>
              </div>
              <span className="text-xs">Consulting</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4">Features</h4>
            <ul className="space-y-2">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Level */}
          <div>
            <h4 className="mb-4">Learn Level</h4>
            <ul className="space-y-2">
              {footerLinks.learnLevel.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} HAK Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
