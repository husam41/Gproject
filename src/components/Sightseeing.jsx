import React from "react";
import { Link } from "react-router-dom";

function Sightseeing() {
  const sites = [
    {
      name: "Pyramids of Giza",
      desc: "One of the Seven Wonders of the Ancient World.",
      img: "https://source.unsplash.com/400x300/?pyramids,egypt"
    },
    {
      name: "Karnak Temple",
      desc: "A vast mix of decayed temples and chapels.",
      img: "https://source.unsplash.com/400x300/?temple,egypt"
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
        {sites.map((s, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={s.img} alt={s.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-indigo-600">{s.name}</h2>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sightseeing;
