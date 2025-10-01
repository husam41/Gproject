import React from 'react';
import { Link } from 'react-router-dom';

function Hotel() {
  const hotels = [
    {
      id: 1,
      name: "Luxury Beach Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      rating: 4.8,
      price: 299,
      location: "Hurghada, Egypt",
      amenities: ["Pool", "Beach Access", "Spa", "WiFi"]
    },
    {
      id: 2,
      name: "Historic Downtown Hotel",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      rating: 4.6,
      price: 199,
      location: "Cairo, Egypt",
      amenities: ["Restaurant", "Gym", "Business Center", "WiFi"]
    },
    {
      id: 3,
      name: "Desert Oasis Resort",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      rating: 4.9,
      price: 399,
      location: "Siwa, Egypt",
      amenities: ["Desert Tours", "Traditional Spa", "Pool", "Restaurant"]
    },
    {
      id: 4,
      name: "Nile View Hotel",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      rating: 4.7,
      price: 249,
      location: "Luxor, Egypt",
      amenities: ["River View", "Pool", "Restaurant", "Tour Desk"]
    },
    {
      id: 5,
      name: "Red Sea Paradise",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      rating: 4.5,
      price: 179,
      location: "Sharm El Sheikh, Egypt",
      amenities: ["Diving Center", "Beach", "Pool", "All Inclusive"]
    },
    {
      id: 6,
      name: "Alexandria Marina Hotel",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      rating: 4.4,
      price: 159,
      location: "Alexandria, Egypt",
      amenities: ["Marina View", "Restaurant", "WiFi", "Parking"]
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  // تم إزالة handleBackToHome لاستخدام Link بدلاً منه

  const handleBookNow = (hotelName) => {
    alert(`تم اختيار حجز فندق: ${hotelName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Hotel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing hotels with exceptional service and unforgettable experiences
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Hotel Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">${hotel.price}/night</span>
                </div>
              </div>

              {/* Hotel Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">{hotel.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {renderStars(hotel.rating)}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {hotel.rating}
                  </span>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">${hotel.price}</span>
                    <span className="text-gray-500 text-sm">/night</span>
                  </div>
                  <button 
                    onClick={() => handleBookNow(hotel.name)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg border border-indigo-600 transition-colors duration-200">
            Load More Hotels
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotel;