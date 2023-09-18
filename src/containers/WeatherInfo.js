import React, {useState} from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const WeatherInfo = () => {
    const [data, setData] = useState({})

    const handleSearch = (location) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=add2e92a2bee9a5aba8c7e48aec7bd1c`

        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    };

    return (
        <section className="container mx-auto my-32 text-center flex-grow">
            <SearchBar onSearch={handleSearch}/>
            <div className="info-wrapper bg-blue-200 bg-opacity-20 py-10 px-4 rounded-lg text-white mx-auto w-5/6 md:w-2/6">
                <div className="top mb-[1rem] pl-8 text-left">
                    <div className="location">
                        <p className="text-4xl">{data.name}</p>
                    </div>
                    <div className="temp text-8xl">
                        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div className="description text-xl mt-4">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                {data.name !== undefined &&
                    <div className="bottom flex flex-col md:flex-row justify-evenly text-center w-full m-[1rem auto] p-[1rem] bg-black bg-opacity-20 text-sm md:text-xl rounded-lg">
                        <div className="feels my-2">
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity my-2">
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind my-2">
                            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default WeatherInfo;