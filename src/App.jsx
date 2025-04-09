import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import Landing from './components/landing';
import Forecast from './components/Forecast';
import './weather.css';
import './landing.css';

const API_KEY = '041a0fbc1f979e18972577abd74056e0';

const bgMap = {
  Clouds: 'cloudy2.jpg',
  Haze: 'haze2.jpg',
  Mist: 'mist2.jpg',
  Clear: 'clear2.jpeg',
  Rain: 'rain2.jpg',
  Snow: 'snow2.jpg',
  Default: 'rain2.jpg',
};

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem('searchHistory');
    return stored ? JSON.parse(stored) : [];
  });

  const handleEnter = () => setShowLanding(false);

  const fetchWeather = async (searchCity = city) => {
    if (!searchCity) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeatherData(data);
        setError(false);
        addToHistory(searchCity);
        fetchForecast(searchCity);
      } else {
        setError(true);
        setWeatherData(null);
        setForecastData([]);
      }
    } catch (err) {
      console.error('API fetch failed:', err);
      setError(true);
      setWeatherData(null);
      setForecastData([]);
    }
  };

  const fetchForecast = async (searchCity) => {
    try {
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      const forecastJson = await forecastRes.json();

      const dailyForecasts = forecastJson.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );

      setForecastData(dailyForecasts);
    } catch (err) {
      console.error('Forecast fetch failed:', err);
      setForecastData([]);
    }
  };

  const addToHistory = (cityName) => {
    const updated = [cityName, ...history.filter(c => c !== cityName)].slice(0, 5);
    setHistory(updated);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
  };

  const getWeatherCardBackground = () => {
    if (!weatherData) return '';
    const main = weatherData.weather[0].main;
    const image = bgMap[main] || bgMap.Default;
    return `url(${image})`;
  };

  const getForecastCardBackground = () => {
    if (!forecastData || forecastData.length === 0) return '';
    const main = forecastData[0].weather[0].main;
    const image = bgMap[main] || bgMap.Default;
    return `url(${image})`;
  };

  if (showLanding) return <Landing onEnter={handleEnter} />;

  return (
    <div
      className="app-wrapper"
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'black',
      }}
    >
      <div className="search-section">
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        {history.length > 0 && (
          <div className="recent-searches">
            <h4>Recent Searches:</h4>
            <ul>
              {history.map((city, idx) => (
                <li key={idx} onClick={() => fetchWeather(city)}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
        {error && <ErrorMessage />}
      </div>

      <div className="content-area">
        {weatherData && (
          <div
            className="card"
            style={{
              backgroundImage: getWeatherCardBackground(),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <WeatherCard data={weatherData} />
          </div>
        )}

        {forecastData.length > 0 && (
          <div
            className="forecast-card"
            style={{
              backgroundImage: getForecastCardBackground(),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Forecast data={forecastData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
