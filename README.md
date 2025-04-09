# 🌦️ Weather App

A sleek and modern React weather app that displays current weather conditions and a 5-day forecast based on user input. Built with the OpenWeatherMap API and designed for clarity, responsiveness, and a smooth user experience.

---

## ✨ Features

- 🔍 Search weather by city name  
- 📌 Recent search history saved in localStorage  
- 🌈 Dynamic background based on current weather (e.g., rain, clouds, sun)  
- 📆 5-day weather forecast at a glance  
- 📱 Fully responsive and mobile-friendly design  
- 🎨 Aesthetic landing page and clean UI animations  

---

## 🚀 Tech Stack

- **Frontend**: React  
- **Styling**: CSS, Flexbox  
- **API**: [OpenWeatherMap](https://openweathermap.org/api)  
- **Deployment**: Vercel  

---

## 🌐 API Integration Details

This project integrates with the **OpenWeatherMap API** to fetch:

- 🌤️ Current weather data  
- ⛅ 5-day weather forecasts  

### 🔑 API Key Setup

The API key is **hardcoded in the codebase** for simplicity.

> ⚠️ For production or public projects, it's recommended to move the API key to an environment variable and **do not commit it** to version control.

### 🔗 Endpoints Used

- **Current Weather**  
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

- **Forecast**  
  `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`

### 📉 API Rate Limits

| Plan       | Calls/Minute | Data Update Frequency |
|------------|---------------|------------------------|
| Free Tier  | 60            | Every 10 minutes       |

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/ShivikaAg4/weather_app.git
cd weather_app
npm install
npm start
