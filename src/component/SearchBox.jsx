// SearchBox.jsx

import React from 'react';
const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => onInputChange(event.target.value)} 
            placeholder="Add your domain" className="search-input" />
        </div>
    );
};

export default SearchBox;