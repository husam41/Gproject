import React from "react";
import { Link } from "react-router-dom";

function Restaurant() {
  const restaurants = [
    {
      name: "Koshary El Tahrir",
      desc: "Famous traditional Egyptian Koshary.",
      img: "https://source.unsplash.com/400x300/?restaurant,food"
    },
    {
      name: "Sequoia",
      desc: "Luxury dining with Nile view.",
      img: "https://source.unsplash.com/400x300/?egypt,restaurant"
    },
  ];

  return (
    <div className="p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back to Home
      </Link>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((r, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={r.img} alt={r.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-indigo-600">{r.name}</h2>
              <p className="text-gray-600">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
