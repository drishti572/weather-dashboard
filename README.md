# WeatherNow – Weather Forecast Website

WeatherNow is a simple web application that allows users to check the current weather of any city. The website displays temperature and weather conditions and changes the background video according to the weather type, creating a more interactive experience.

## Features

* Search weather by entering a city name
* Displays current temperature and weather description
* Dynamic background video based on weather conditions
* Login and Sign Up modal interface
* Clean and responsive user interface
* Uses OpenWeatherMap API for real-time weather data

## Technologies Used

* HTML – Structure of the website
* CSS – Styling and layout design
* JavaScript – Fetching API data and website functionality
* OpenWeatherMap API – Weather data provider
* Video backgrounds – Visual effect based on weather conditions

## Project Structure

Weather App
│
├── videos
│   ├── clear.mp4
│   ├── clouds.mp4
│   ├── default.mp4
│   ├── mist.mp4
│   ├── rain.mp4
│   └── snow.mp4
│
├── index.html
├── style.css
├── script.js
└── README.md

## How It Works

1. The user enters the name of a city.
2. The application sends a request to the OpenWeatherMap API.
3. The API returns weather information such as temperature and weather condition.
4. Based on the weather condition, the website changes the background video automatically.

Examples:

* Clear weather → clear.mp4
* Clouds → clouds.mp4
* Rain or Thunderstorm → rain.mp4
* Snow → snow.mp4
* Mist or Fog → mist.mp4

## API Used

This project uses the OpenWeatherMap API to fetch real-time weather information.

API request format:

https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}

To use the project with your own API key, create a free account on the OpenWeatherMap website and replace the API key in the JavaScript file.

## How to Run the Project

1. Download or clone the project files.
2. Open the project folder in Visual Studio Code.
3. Ensure the folder structure is correct.
4. Open the `index.html` file in a web browser or run it using Live Server.

## Future Improvements

* Add 5-day weather forecast
* Detect user location automatically
* Improve mobile responsiveness
* Implement real login and signup authentication
* Add more UI animations and design improvements

## Author

Drishiti Juyal
