// components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search-bar">
            <i className="fas fa-search" style={{ marginRight: '10px', color: '#28a745', alignSelf: 'center' }}></i>
            <input
                type="text"
                className="search-input"
                placeholder="Search recipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
