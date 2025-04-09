# 🌦️ Weather App

A sleek and modern React weather app that displays current weather conditions and a 5-day forecast based on user input. Built with OpenWeatherMap API and designed for clarity and responsiveness.

## ✨ Features

-  Search weather by city name
-  Recent search history saved in localStorage
-  Dynamic background based on current weather (e.g., rain, clouds, sun)
-  5-day weather forecast at a glance
-  Fully responsive and mobile-friendly design
-  Aesthetic landing page and clean UI animations

## 🚀 Tech Stack

- **Frontend**: React
- **Styling**: CSS, Flexbox
- **API**: [OpenWeatherMap](https://openweathermap.org/api)
- **Deployment**: Vercel

-  API Integration Details
This project uses the OpenWeatherMap API to fetch:

Current weather data

5-day weather forecasts

🔑 API Key Setup
The API key is directly included in the codebase for simplicity.

Note: For production use or if making the project public, it's recommended to move your API key into an environment variable and keep it out of version control.

🔗 Endpoints Used
Current Weather
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

Forecast
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric

API Rate Limits
Plan	Calls per Minute	Data Update Frequency
Free Tier	60	Every 10 minutes



## 🛠️ Installation

```bash
git clone https://github.com/ShivikaAg4/weather_app.git
cd weather_app
npm install
npm start
