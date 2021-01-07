import React, { useState, useEffect } from 'react';
import '../Stylesheets/header.css';

const Header = () => {
    return  <div className="header">
                <h1>Astro Wx</h1>
                <div className="annotation">Local and Space Weather in one place</div>
            </div>
}

export default Header;