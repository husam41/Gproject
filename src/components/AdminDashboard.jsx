import React, { useState } from "react";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("hotels");

  // بيانات الفنادق
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Hilton Cairo",
      location: "Cairo, Egypt",
      price: 120,
      rating: 4.5,
    },
  ]);

  // بيانات المطاعم
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Koshary El Tahrir",
      location: "Cairo, Egypt",
      price: 10,
      cuisine: "Egyptian",
      rating: 4.7,
    },
  ]);

  // بيانات المواقع الأثرية
  const [sightseeing, setSightseeing] = useState([
    {
      id: 1,
      name: "Pyramids of Giza",
      location: "Giza, Egypt",
      ticket: 20,
      type: "Historical",
      rating: 4.9,
    },
  ]);

  // بيانات الرسائل
  const [messages, setMessages] = useState([
    { id: 1, sender: "Ali", content: "I need help with booking." },
  ]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🛠 Admin Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab("hotels")}
          className={`px-6 py-3 ${
            activeTab === "hotels" ? "border-b-2 border-indigo-600 font-bold" : ""
          }`}
        >
          🏨 Hotels
        </button>
        <button
          onClick={() => setActiveTab("restaurants")}
          className={`px-6 py-3 ${
            activeTab === "restaurants" ? "border-b-2 border-indigo-600 font-bold" : ""
          }`}
        >
          🍽 Restaurants
        </button>
        <button
          onClick={() => setActiveTab("sightseeing")}
          className={`px-6 py-3 ${
            activeTab === "sightseeing" ? "border-b-2 border-indigo-600 font-bold" : ""
          }`}
        >
          🏛 Sightseeing
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-6 py-3 ${
            activeTab === "messages" ? "border-b-2 border-indigo-600 font-bold" : ""
          }`}
        >
          💬 Messages
        </button>
      </div>

      {/* Hotels Management */}
      {activeTab === "hotels" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Hotels Management</h2>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
              + Add New Hotel
            </button>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Rating</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((h) => (
                <tr key={h.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{h.name}</td>
                  <td className="px-6 py-4">{h.location}</td>
                  <td className="px-6 py-4">${h.price}</td>
                  <td className="px-6 py-4">{h.rating}</td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Restaurants Management */}
      {activeTab === "restaurants" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Restaurants Management</h2>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
              + Add New Restaurant
            </button>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Cuisine</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{r.name}</td>
                  <td className="px-6 py-4">{r.location}</td>
                  <td className="px-6 py-4">{r.cuisine}</td>
                  <td className="px-6 py-4">${r.price}</td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Sightseeing Management */}
      {activeTab === "sightseeing" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Sightseeing Management</h2>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
              + Add New Site
            </button>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Ticket Price</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sightseeing.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{s.name}</td>
                  <td className="px-6 py-4">{s.location}</td>
                  <td className="px-6 py-4">{s.type}</td>
                  <td className="px-6 py-4">${s.ticket}</td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Messages */}
      {activeTab === "messages" && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages</h2>
          <ul>
            {messages.map((m) => (
              <li key={m.id} className="border-b py-2">
                <span className="font-semibold">{m.sender}: </span>
                {m.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
