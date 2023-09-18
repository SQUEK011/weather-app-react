import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherInfo from "./containers/WeatherInfo";

function App() {
  return (
    <div className="App">
      <div className="main min-h-screen flex flex-col">
          <Header/>
          <WeatherInfo/>
          <p className="text-white md:text-left text-center md:ml-4">Photo by <a href="https://unsplash.com/@ruslanbardash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">Ruslan Bardash</a> on <a href="https://unsplash.com/photos/WMSvsWzhM0g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">Unsplash</a>
          </p>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
