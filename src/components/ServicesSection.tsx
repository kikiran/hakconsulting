import React from 'react';
import PersonImage from "../assets/images/person.jpeg";
import InvestmentImage from "../assets/images/investment.jpeg";
import WealthImage from "../assets/images/wealth.jpeg";

const services = [
  {
    title: "Personalized Strategies",
    description: "Financial Solutions",
    image: PersonImage,
  },
  {
    title: "Investment Planning",
    description: "Growth Strategies",
    image: InvestmentImage,
  },
  {
    title: "Wealth Management",
    description: "Asset Protection",
    image: WealthImage,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 sm:mb-16 headinginTitle">
          Discover Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
