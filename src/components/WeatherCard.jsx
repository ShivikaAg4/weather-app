import React from 'react';

const WeatherCard = ({ data }) => {
  const logoMap = {
    Clouds: 'clouds.png',
    Haze: 'mist.png',
    Mist: 'mist.png',
    Clear: 'clear.png',
    Rain: 'rain.png',
    Snow: 'snow.png',
    Default: 'drizzle.png',
  };

  const main = data.weather[0].main;
  const logo = logoMap[main] || logoMap.Default;

  return (
    <div className="weather" style={{ display: 'block' }}>
      <img className="logo" src={`/${logo}`} alt={main} />
      <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
      <h3 className="city">{data.name}</h3>
      <h4 className="msg">{main}</h4>
      <div className="details">
        <div className="col">
          <img src="/humidity.png" alt="humidity" />
          <div className="humidity">
            <p className="humid">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="/wind.png" alt="wind" />
          <div className="windy">
            <p className="wind">{data.wind.speed} km/h</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
