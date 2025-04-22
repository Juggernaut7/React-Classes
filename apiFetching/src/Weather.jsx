import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {TiWeatherCloudy, TiWeatherStormy, TiWeatherSunny, TiWeatherSnow } from 'react-icons/ti';


const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

const Weather = () => {

    
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    try {
      const response = await axios.get(
        API_URL, 
        {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }

      }
      )

      setWeather(response.data);
      console.log(response.data);
      setError('');
    } catch (error) {
      setWeather(null);
      setError('City not found');
    }
  }
  
      
      return (
        <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-green-500 min-h-screen flex justify-center items-center px-4">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-white transition-all duration-300">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 drop-shadow-lg tracking-tight">
              🌤️ Weather App
            </h1>
      
            {/* Input */}
            <input
              type="text"
              className="w-full bg-white/20 text-white border border-white/30 rounded-xl p-3 text-lg placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white mb-5 transition"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
      
            {/* Button */}
            <button
              onClick={getWeather}
              className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-100 transition duration-300 mb-5 shadow-sm"
            >
              Get Weather
            </button>
      
            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm text-center mb-4">{error}</p>
            )}
      
            {/* Weather Display */}
            {weather && (
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-inner text-center space-y-3 border border-white/20">
                <h2 className="text-2xl font-bold mb-2">
                  {weather.name}, {weather.sys.country}
                </h2>
      
                <p className="capitalize text-white/80 text-base">
                  <span className="font-semibold text-white">
                    {weather.weather[0].main}
                  </span>{' '}
                  — {weather.weather[0].description}
                </p>
      
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-white/90">
                  <p className="flex items-center gap-2">
                    <TiWeatherCloudy size={20} /> Temp:{" "}
                    <span className="font-semibold">{weather.main.temp}°C</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <TiWeatherStormy size={20} /> Feels like:{" "}
                    <span className="font-semibold">{weather.main.feels_like}°C</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <TiWeatherSunny size={20} /> Humidity:{" "}
                    <span className="font-semibold">{weather.main.humidity}%</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <TiWeatherSnow size={20} /> Wind:{" "}
                    <span className="font-semibold">{weather.wind.speed} m/s</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      
      );
      
}

export default Weather
