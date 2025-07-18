// Header.jsx
import React from 'react';

const Header=({headTitle , headerExpanded})=>{
    return(
        <div className="head-container">
            <h1 className="head-text">{headTitle}</h1>
        </div>
    );
};
export default Header;