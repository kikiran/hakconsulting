import React from 'react';
import { MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 headinginTitle">
              Get in <span className="text-purple-600">touch</span>
            </h2>
            <div className="space-y-3 mb-8">
              <p className="text-gray-600">HAK Consulting</p>
              <p className="text-gray-600">Level 1, 12 Sample St,</p>
              <p className="text-gray-600">Sydney, New South Wales, 000000</p>
              <p className="text-gray-600">info@hakconsulting.com</p>
            </div>
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-800 transition-colors cursor-pointer">
              Send Enquiry
            </button>
          </div>

          {/* Right Map */}
          <div className="relative aspect-video lg:aspect-square rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="HAK Consulting Location"
              src="https://www.google.com/maps?q=Level%201%2C%2012%20Sample%20St%2C%20Sydney%2C%20NSW&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
