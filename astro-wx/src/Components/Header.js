import React, { useState, useEffect } from 'react';
import '../Stylesheets/header.css';

const Header = (props) => {
    return  <div className="header">
                <h1>AstroWx</h1>
                <div className="annotation">Local and Space Weather in one place</div>

            </div>
}

export default Header;