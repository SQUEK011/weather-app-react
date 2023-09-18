import React from 'react';

const Header = () => {
    return (
        <header className="simple-header bg-slate-950 py-4">
            <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-white text-4xl font-semibold text-center">WeatherReact</div>
                <a href="https://github.com/SQUEK011" target="_blank" className="text-white hover:underline mb-4 md:mb-0">@SQUEK011</a>
            </nav>
        </header>

    );
};

export default Header;