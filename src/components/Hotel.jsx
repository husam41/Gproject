import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hotel() {
  // هنا سيتم استبدال البيانات بـ API أو Database
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Luxury Beach Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      rating: 4.8,
      price: 299,
      location: "Hurghada, Egypt",
      description: "Experience ultimate luxury with stunning Red Sea views",
      amenities: ["Infinity Pool", "Private Beach", "Spa & Wellness", "Fine Dining", "WiFi", "Airport Transfer"],
      rooms: 250,
      type: "5-Star Resort"
    },
    {
      id: 2,
      name: "Historic Downtown Hotel",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
      rating: 4.6,
      price: 199,
      location: "Cairo, Egypt",
      description: "Elegant hotel in the heart of historic Cairo",
      amenities: ["Rooftop Restaurant", "Fitness Center", "Business Lounge", "City View", "WiFi", "Concierge"],
      rooms: 150,
      type: "4-Star Hotel"
    },
    {
      id: 3,
      name: "Desert Oasis Resort",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      rating: 4.9,
      price: 399,
      location: "Siwa, Egypt",
      description: "Unique desert experience with traditional hospitality",
      amenities: ["Desert Safari", "Traditional Spa", "Stargazing", "Organic Restaurant", "Cultural Tours", "Hot Springs"],
      rooms: 80,
      type: "Boutique Resort"
    },
    {
      id: 4,
      name: "Nile View Hotel",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      rating: 4.7,
      price: 249,
      location: "Luxor, Egypt",
      description: "Breathtaking Nile views with ancient temple proximity",
      amenities: ["River Cruise", "Temple Tours", "Rooftop Pool", "Egyptian Cuisine", "WiFi", "Balloon Rides"],
      rooms: 180,
      type: "5-Star Hotel"
    },
    {
      id: 5,
      name: "Red Sea Paradise",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      rating: 4.5,
      price: 179,
      location: "Sharm El Sheikh, Egypt",
      description: "All-inclusive diving paradise on the Red Sea",
      amenities: ["Diving Center", "Coral Reef", "Water Sports", "All Inclusive", "Kids Club", "Entertainment"],
      rooms: 320,
      type: "Beach Resort"
    },
    {
      id: 6,
      name: "Alexandria Marina Hotel",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      rating: 4.4,
      price: 159,
      location: "Alexandria, Egypt",
      description: "Mediterranean charm with modern luxury",
      amenities: ["Marina View", "Seafood Restaurant", "Beach Access", "WiFi", "Parking", "City Tours"],
      rooms: 120,
      type: "4-Star Hotel"
    }
  ]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  // Filter hotels based on search and price
  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceFilter === "all" ||
                        (priceFilter === "budget" && hotel.price < 200) ||
                        (priceFilter === "mid" && hotel.price >= 200 && hotel.price < 300) ||
                        (priceFilter === "luxury" && hotel.price >= 300);
    return matchesSearch && matchesPrice;
  });

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-semibold text-gray-700">{rating}</span>
      </div>
    );
  };

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    // هنا سيتم إضافة API call للحجز
    alert(`Booking request sent for ${hotel.name}. We'll contact you shortly!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
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
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Luxury Hotels
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Discover exceptional accommodations across Egypt's most beautiful destinations
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search hotels by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Price Filter */}
            <div className="flex gap-2">
              {[
                { value: "all", label: "All Prices" },
                { value: "budget", label: "Under $200" },
                { value: "mid", label: "$200-$300" },
                { value: "luxury", label: "$300+" }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setPriceFilter(filter.value)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    priceFilter === filter.value
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Available Hotels <span className="text-blue-600">({filteredHotels.length})</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hotel Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">${hotel.price}</span>
                  <span className="text-sm text-gray-600">/night</span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {hotel.type}
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{hotel.location}</span>
                </div>
              </div>

              {/* Hotel Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {hotel.name}
                </h3>
                
                {/* Rating */}
                <div className="mb-4">
                  {renderStars(hotel.rating)}
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {hotel.description}
                </p>

                {/* Rooms Count */}
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-sm font-medium">{hotel.rooms} Rooms Available</span>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                        +{hotel.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Button */}
                <button 
                  onClick={() => handleBookNow(hotel)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No hotels found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8 opacity-90">Our travel experts are here to help you find the perfect hotel</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hotel;