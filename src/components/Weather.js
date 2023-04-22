import React, { useState } from "react";
import axios from "axios";




const Weather = () => {
  // Component state
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    // Make sure to replace YOUR_API_KEY with the API key you got from OpenWeatherMap
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=235907257a37cd0e19680dc213a1c6c8&units=metric`);
    setWeatherData(response.data);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByLocation(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setWeatherData({ error: "Unable to get your location. Please try again later." });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setWeatherData({ error: "Geolocation is not supported by this browser." });
    }
  };

  const fetchWeatherByLocation = async (latitude, longitude) => {
    try {
      // Replace YOUR_API_KEY with your actual API key from OpenWeatherMap
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=235907257a37cd0e19680dc213a1c6c8&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData({ error: "Error fetching weather data. Please try again later." });
    }
  }; 

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };
  console.log(weatherData);
  return (
    <>
    <div>
      <h1>React Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          id={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
        
      </form>
      <button type="button" onClick={getCurrentLocation}>
          Get Weather for My Location
      s</button>
      {weatherData && (
  <div>
    {weatherData.error ? (
      <p>{weatherData.error}</p>
    ) : weatherData.sys && weatherData.weather && weatherData.main && weatherData.wind ? (
      <>
        <h2>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <h3>{weatherData.weather[0].main}</h3>
        <p>
          Temperature: {weatherData.main.temp} °C
        </p>
        <p>
          Humidity: {weatherData.main.humidity} %
        </p>
        <p>
          Wind: {weatherData.wind.speed} m/s
        </p>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
)}

    </div>
  </>
  );
};

export default Weather;
