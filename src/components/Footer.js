import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <div className="text-2xl font-semibold">WeatherReact</div>
                        <div className="text-gray-500 text-xs">powered by OpenWeatherAPI</div>
                </div>
                <div>
                    <div className="text-gray-500 text-xs">Copyright &copy; @SQUEK011</div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;