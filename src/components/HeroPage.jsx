import React from "react";
import { Link } from "react-router-dom";

function HeroPage() {
  const services = [
    { name: "Hotel", path: "/hotel", desc: "Book comfortable hotels with ease." },
    { name: "Sightseeing", path: "/sightseeing", desc: "Explore the best attractions." },
    { name: "Restaurant", path: "/restaurant", desc: "Find top-rated restaurants nearby." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">Welcome to Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroPage;
