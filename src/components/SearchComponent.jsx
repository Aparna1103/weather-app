import React from 'react';

const SearchComponent = ({ city, setCity, getData }) => {
    return (
        <div className="search-box">
            <button className="btn-search" onClick={getData}><i className="fas fa-search"></i></button>
            <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
                value={city}
                onChange={e => setCity(e.target.value)}
            />
        </div>
    )
}

export default SearchComponent;
