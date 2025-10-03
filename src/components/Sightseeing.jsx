import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sightseeing() {
  const [sites] = useState([
    {
      id: 1,
      name: "Pyramids of Giza",
      image: "https://source.unsplash.com/800x600/?pyramids,egypt",
      rating: 4.9,
      location: "Giza, Egypt",
      description: "One of the Seven Wonders of the Ancient World.",
      type: "Historical"
    },
    {
      id: 2,
      name: "Karnak Temple",
      image: "https://source.unsplash.com/800x600/?temple,egypt",
      rating: 4.8,
      location: "Luxor, Egypt",
      description: "A vast mix of decayed temples and chapels.",
      type: "Religious"
    },
    {
      id: 3,
      name: "Abu Simbel",
      image: "https://source.unsplash.com/800x600/?egypt,temple",
      rating: 4.7,
      location: "Aswan, Egypt",
      description: "Massive rock temple built by Pharaoh Ramses II.",
      type: "Historical"
    },
    {
      id: 4,
      name: "White Desert",
      image: "https://source.unsplash.com/800x600/?desert,egypt",
      rating: 4.6,
      location: "Farafra, Egypt",
      description: "Unique desert landscape with chalk rock formations.",
      type: "Natural"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredSites = sites.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      filterType === "all" || s.type.toLowerCase() === filterType.toLowerCase();

    return matchesSearch && matchesType;
  });

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm font-semibold text-gray-700">{rating}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-red-200 bg-clip-text text-transparent">
            Sightseeing in Egypt
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Explore Egypt’s most breathtaking historical and natural landmarks
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search landmarks by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              {["all", "Historical", "Religious", "Natural"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    filterType === type
                      ? "bg-gradient-to-r from-yellow-600 to-red-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Must-See Landmarks{" "}
          <span className="text-yellow-600">({filteredSites.length})</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {s.type}
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">{s.location}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {s.name}
                </h3>

                {/* Rating */}
                <div className="mb-4">{renderStars(s.rating)}</div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {s.description}
                </p>

                {/* Explore Button */}
                <button className="w-full bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSites.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No landmarks found
            </h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-yellow-600 to-red-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Plan Your Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Our travel guides can help you organize the perfect sightseeing
            tour in Egypt
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sightseeing;
