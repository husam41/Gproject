import React, { useState } from 'react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('hotels');
  
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
      description: "Experience luxury beachfront living with stunning Red Sea views."
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
      description: "Located in the heart of Cairo, perfect for business travelers."
    }
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      phone: "+20 123 456 7890",
      message: "I would like to book a tour to the Pyramids for next week. Can you provide more information about available packages?",
      date: "2025-09-28",
      status: "unread"
    },
    {
      id: 2,
      name: "Sarah Mohamed",
      email: "sarah@example.com",
      phone: "+20 111 222 3333",
      message: "The hotel service was excellent! However, I had some issues with the WiFi connection in my room.",
      date: "2025-09-27",
      status: "read"
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 555 123 4567",
      message: "Can you arrange transportation from Cairo airport to Luxor? We are a group of 6 people.",
      date: "2025-09-26",
      status: "read"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingHotel, setEditingHotel] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    location: '',
    amenities: '',
    website: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openAddModal = () => {
    setEditingHotel(null);
    setFormData({
      name: '',
      image: '',
      price: '',
      location: '',
      amenities: '',
      website: '',
      description: ''
    });
    setShowModal(true);
  };

  const openEditModal = (hotel) => {
    setEditingHotel(hotel);
    setFormData({
      name: hotel.name,
      image: hotel.image,
      price: hotel.price,
      location: hotel.location,
      amenities: hotel.amenities.join(', '),
      website: hotel.website,
      description: hotel.description
    });
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.price || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    const newHotel = {
      id: editingHotel ? editingHotel.id : Date.now(),
      name: formData.name,
      image: formData.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      rating: editingHotel ? editingHotel.rating : 0,
      totalRatings: editingHotel ? editingHotel.totalRatings : 0,
      price: Number(formData.price),
      location: formData.location,
      amenities: formData.amenities.split(',').map(a => a.trim()),
      website: formData.website,
      description: formData.description
    };

    if (editingHotel) {
      setHotels(hotels.map(h => h.id === editingHotel.id ? newHotel : h));
    } else {
      setHotels([...hotels, newHotel]);
    }

    setShowModal(false);
  };

  const deleteHotel = (id) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      setHotels(hotels.filter(h => h.id !== id));
    }
  };

  const markAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: 'read' } : msg
    ));
  };

  const deleteMessage = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(msg => msg.id !== id));
    }
  };

  const stats = {
    totalHotels: hotels.length,
    averageRating: (hotels.reduce((sum, h) => sum + h.rating, 0) / hotels.length).toFixed(1),
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => m.status === 'unread').length
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-indigo-100">Manage your hotels and customer messages</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Hotels</p>
                <p className="text-3xl font-bold text-indigo-600">{stats.totalHotels}</p>
              </div>
              <div className="text-4xl">🏨</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Rating</p>
                <p className="text-3xl font-bold text-yellow-500">{stats.averageRating} ⭐</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Messages</p>
                <p className="text-3xl font-bold text-green-600">{stats.totalMessages}</p>
              </div>
              <div className="text-4xl">💬</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Unread Messages</p>
                <p className="text-3xl font-bold text-red-600">{stats.unreadMessages}</p>
              </div>
              <div className="text-4xl">🔔</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === 'hotels'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🏨 Manage Hotels
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors relative ${
                activeTab === 'messages'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              💬 Customer Messages
              {stats.unreadMessages > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {stats.unreadMessages}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Hotels Management */}
        {activeTab === 'hotels' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Hotels Management</h2>
              <button
                onClick={openAddModal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                + Add New Hotel
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hotel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {hotels.map((hotel) => (
                    <tr key={hotel.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-16 h-16 rounded-lg object-cover mr-4"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{hotel.name}</div>
                            <div className="text-sm text-gray-500">{hotel.amenities.slice(0, 2).join(', ')}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{hotel.location}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">${hotel.price}/night</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                          ⭐ {hotel.rating} ({hotel.totalRatings})
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(hotel)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteHotel(hotel.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Messages</h2>
            
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`border rounded-xl p-6 transition-all ${
                    msg.status === 'unread' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{msg.name}</h3>
                        {msg.status === 'unread' && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>📧 {msg.email}</p>
                        <p>📞 {msg.phone}</p>
                        <p>📅 {msg.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {msg.status === 'unread' && (
                        <button
                          onClick={() => markAsRead(msg.id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          Mark Read
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingHotel ? 'Edit Hotel' : 'Add New Hotel'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Hotel Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Enter hotel name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Price ($/night) *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="299"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Cairo, Egypt"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Website URL</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="https://hotel-website.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Amenities (comma separated)</label>
                <input
                  type="text"
                  name="amenities"
                  value={formData.amenities}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Pool, WiFi, Spa, Restaurant"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  placeholder="Enter hotel description..."
                ></textarea>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {editingHotel ? 'Update Hotel' : 'Add Hotel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;