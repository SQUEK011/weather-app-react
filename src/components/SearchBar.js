import React, {useState} from 'react';

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(location);
            setLocation('');
        }
    };

    return (
        <div className="search-box mb-5">
            <input
                className="placeholder:italic placeholder:text-slate-400 w-auto bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={handleSearch}
                placeholder='Enter Location..'
                type="text" />
        </div>
    );
};

export default SearchBar;