import React, { useState } from "react";
import { Link } from "react-router-dom";

function Restaurant() {
  const [restaurants] = useState([
    {
      id: 1,
      name: "Koshary El Tahrir",
      image: "https://source.unsplash.com/800x600/?egypt,koshary",
      rating: 4.7,
      location: "Cairo, Egypt",
      description: "Famous traditional Egyptian Koshary loved by locals and tourists.",
      type: "Traditional",
      phone: "+20 2 1234 5678",
      map: "https://maps.google.com/?q=Koshary+El+Tahrir+Cairo"
    },
    {
      id: 2,
      name: "Sequoia",
      image: "https://source.unsplash.com/800x600/?restaurant,nile",
      rating: 4.8,
      location: "Zamalek, Cairo",
      description: "Luxury dining experience with stunning Nile views.",
      type: "Fine Dining",
      phone: "+20 2 9876 5432",
      map: "https://maps.google.com/?q=Sequoia+Zamalek+Cairo"
    },
    {
      id: 3,
      name: "Abou El Sid",
      image: "https://source.unsplash.com/800x600/?egypt,food",
      rating: 4.6,
      location: "Cairo, Egypt",
      description: "Authentic Egyptian cuisine in a traditional atmosphere.",
      type: "Authentic",
      phone: "+20 2 2468 1357",
      map: "https://maps.google.com/?q=Abou+El+Sid+Cairo"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      filterType === "all" || r.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-red-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-red-900 via-orange-900 to-yellow-800 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-red-200 bg-clip-text text-transparent">
            Top Restaurants
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Discover Egypt’s most delicious and authentic dining experiences
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              {["all", "Traditional", "Fine Dining", "Authentic"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    filterType === type
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
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

      {/* Restaurants Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((r) => (
            <div
              key={r.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Restaurant Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {r.type}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {r.name}
                </h3>

                {/* Rating */}
                <div className="mb-2">{renderStars(r.rating)}</div>

                {/* Location with Map Link */}
                <p className="text-gray-700 mb-4 flex items-center gap-2">
                  📍 {r.location}{" "}
                  <a
                    href={r.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    View on Map
                  </a>
                </p>

                <p className="text-gray-600 mb-4">{r.description}</p>

                {/* Contact Button */}
                <a
                  href={`tel:${r.phone}`}
                  className="w-full block text-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📞 Contact Restaurant
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
