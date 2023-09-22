# WeatherAppReact - Weather Information Web App

WeatherAppReact is a simple web application that allows you to search for weather information for a specific city. It retrieves data from the OpenWeather API and provides you with details such as temperature, description, "Feels Like," humidity, and wind speed.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)

## Introduction

This project is created to apply, and practice utilising ReactJS to create a simple web application & showcase it as a portfolio. In this project, we utilise concepts such as UseState(), Axios library to get the API library and separate the webapp into suitable components to be reused. 

## Features

- Search for weather information by city name.
- Display temperature in Fahrenheit.
- View additional weather details such as "Feels Like," humidity, and wind speed.
- Stylish and responsive user interface.

## Technologies

- ReactJS 
- TailwindCSS
- OpenWeatherAPI 
- Photos from [Unsplash](https://unsplash.com/)

## Getting Started

Follow these instructions to get the WeatherReact app up and running on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine using your preferred method (HTTPS or SSH).

   ```bash
   git clone https://github.com/SQUEK011/weather-app-react.git
   ```
2. Navigate to the project directory.

   ```bash
   cd weather-react
   ```
3. Install the project dependencies.

   ```bash
   npm install
   ```

## Usage
1. Obtain an API key from OpenWeather by signing up for a free account.
2. Create a .env file in the project root directory and add your OpenWeather API key. The file should look like this:
```env
REACT_APP_OPENWEATHER_API_KEY=your-api-key-here
```
3. Start the development server:
```bash
npm start
```
4. Open your web browser and visit http://localhost:3000 to access the WeatherReact app.
5. Enter the name of a city in the search bar and press Enter to fetch weather information for that city.

## API Key
This project uses the OpenWeather API to fetch weather data. You need to obtain an API key from OpenWeather and add it to the .env file as described in the installation instructions.
