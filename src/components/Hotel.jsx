import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hotel() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Luxury Beach Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      rating: 4.8,
      totalRatings: 245,
      price: 299,
      location: "Hurghada, Egypt",
      amenities: ["Pool", "Beach Access", "Spa", "WiFi"],
      website: "https://luxurybeach.com",
      description: "Experience luxury beachfront living with stunning Red Sea views, world-class spa facilities, and exceptional dining options."
    },
    {
      id: 2,
      name: "Historic Downtown Hotel",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      rating: 4.6,
      totalRatings: 189,
      price: 199,
      location: "Cairo, Egypt",
      amenities: ["Restaurant", "Gym", "Business Center", "WiFi"],
      website: "https://historicdowntown.com",
      description: "Located in the heart of Cairo, perfect for business travelers and tourists. Walking distance to major attractions."
    },
    {
      id: 3,
      name: "Desert Oasis Resort",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      rating: 4.9,
      totalRatings: 312,
      price: 399,
      location: "Siwa, Egypt",
      amenities: ["Desert Tours", "Traditional Spa", "Pool", "Restaurant"],
      website: "https://desertoasis.com",
      description: "Immerse yourself in the tranquility of the desert with authentic Siwan hospitality and breathtaking landscapes."
    },
    {
      id: 4,
      name: "Nile View Hotel",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      rating: 4.7,
      totalRatings: 276,
      price: 249,
      location: "Luxor, Egypt",
      amenities: ["River View", "Pool", "Restaurant", "Tour Desk"],
      website: "https://nileview.com",
      description: "Wake up to stunning Nile views from your room. Ideal location for exploring ancient Egyptian temples and monuments."
    },
    {
      id: 5,
      name: "Red Sea Paradise",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      rating: 4.5,
      totalRatings: 198,
      price: 179,
      location: "Sharm El Sheikh, Egypt",
      amenities: ["Diving Center", "Beach", "Pool", "All Inclusive"],
      website: "https://redseaparadise.com",
      description: "All-inclusive resort perfect for diving enthusiasts. Explore the magnificent coral reefs of the Red Sea."
    },
    {
      id: 6,
      name: "Alexandria Marina Hotel",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      rating: 4.4,
      totalRatings: 167,
      price: 159,
      location: "Alexandria, Egypt",
      amenities: ["Marina View", "Restaurant", "WiFi", "Parking"],
      website: "https://alexandriamarina.com",
      description: "Elegant hotel overlooking Alexandria's beautiful marina. Perfect blend of Mediterranean charm and modern comfort."
    }
  ]);

  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = (rating, isInteractive = false, size = "w-4 h-4") => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      const filled = isInteractive ? (hoverRating || userRating) >= i : rating >= i;
      stars.push(
        <svg 
          key={i} 
          className={`${size} ${filled ? 'text-yellow-400' : 'text-gray-300'} ${isInteractive ? 'cursor-pointer' : ''}`}
          fill="currentColor" 
          viewBox="0 0 20 20"
          onClick={() => isInteractive && setUserRating(i)}
          onMouseEnter={() => isInteractive && setHoverRating(i)}
          onMouseLeave={() => isInteractive && setHoverRating(0)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  const handleRateHotel = (hotel) => {
    setSelectedHotel(hotel);
    setUserRating(0);
    setHoverRating(0);
    setShowRatingModal(true);
  };

  const submitRating = () => {
    if (userRating === 0) {
      alert('Please select a rating');
      return;
    }

    const updatedHotels = hotels.map(hotel => {
      if (hotel.id === selectedHotel.id) {
        const newTotalRatings = hotel.totalRatings + 1;
        const newRating = ((hotel.rating * hotel.totalRatings) + userRating) / newTotalRatings;
        return {
          ...hotel,
          rating: Number(newRating.toFixed(1)),
          totalRatings: newTotalRatings
        };
      }
      return hotel;
    });

    setHotels(updatedHotels);
    setShowRatingModal(false);
    alert('Thank you for your rating!');
  };

  const visitWebsite = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative"
            >
              {/* Hotel Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">${hotel.price}/night</span>
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
                  <h4 className="text-white font-bold text-lg mb-2">About this hotel</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">{hotel.description}</p>
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
                  <span className="text-gray-500 text-xs ml-2">({hotel.totalRatings} reviews)</span>
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

                {/* Actions */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => visitWebsite(hotel.website)}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    Visit Website
                  </button>
                  <button 
                    onClick={() => handleRateHotel(hotel)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    ⭐ Rate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate {selectedHotel?.name}</h2>
            <p className="text-gray-600 mb-6">How was your experience?</p>
            
            <div className="flex justify-center gap-2 mb-8">
              {renderStars(0, true, "w-12 h-12")}
            </div>

            {userRating > 0 && (
              <p className="text-center text-gray-700 mb-6">
                You rated: <span className="font-bold text-yellow-500">{userRating} stars</span>
              </p>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setShowRatingModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitRating}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Submit Rating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hotel;