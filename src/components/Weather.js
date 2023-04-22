import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  // Component state
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async (latitude, longitude, city = "") => {
    try {
      const apiUrl = city
        ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=235907257a37cd0e19680dc213a1c6c8&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=235907257a37cd0e19680dc213a1c6c8&units=metric`;

      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeather(latitude, longitude);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(null, null, city);
  };
  console.log(weatherData);
  return (
    <>
      <div className="border-primary">
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
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
                <p>Wind: {weatherData.wind.speed} m/s</p>
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
