import React, { useState, useEffect } from 'react';
import LocalWeather from './LocalWeather';
import SpaceWeather from './SpaceWeather';
import '../Stylesheets/panel.css';
const Panels = (props) => {
    
    return  <div className="wx-panels">
                <LocalWeather />
                <SpaceWeather />
            
            </div>
}

export default Panels;