import React, { useState } from 'react';
import axios from 'axios';

const IMAGE_API_KEY = import.meta.env.VITE_IMAGE_API_KEY;

const Gallery = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${IMAGE_API_KEY}&q=${query}&image_type=photo`
    );
    setImages(response.data.hits);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-10 tracking-tight">
          🖼️ Search & Discover Images
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search high-quality images..."
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 text-white placeholder-white/60 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <button
            onClick={searchImages}
            className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow hover:bg-blue-100 transition duration-300"
          >
            🔍 Search
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div key={image.id} className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={image.webformatURL}
                alt={image.tags}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex justify-between items-center text-white">
                <p className="font-medium truncate max-w-[70%]">{image.tags}</p>
                <span className="text-sm opacity-80">❤️ {image.likes}</span>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p className="text-center text-white/70 mt-10 text-lg">Start by searching for something cool ✨</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
