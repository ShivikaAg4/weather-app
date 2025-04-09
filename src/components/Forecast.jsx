import React from "react";
import '../Forecast.css';

const Forecast = ({ data }) => {
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-container">
        {data.map((item, index) => {
          const date = new Date(item.dt_txt).toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          });

          const icon = item.weather[0].icon;
          const temp = Math.round(item.main.temp);

          return (
            <div className="forecast-item" key={index}>
              <p>{date}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={item.weather[0].main}
              />
              <p>{temp}°C</p>
              <p>{item.weather[0].main}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
