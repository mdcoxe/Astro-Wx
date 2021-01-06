import React, { useState, useEffect } from 'react';
import LocalWeather from './LocalWeather';
import SpaceWeather from './SpaceWeather';

const WxPanels = (props) => {
    
    return  <div className="wx-panels">
                <LocalWeather />
                <SpaceWeather />
            
            </div>
}

export default WxPanels;