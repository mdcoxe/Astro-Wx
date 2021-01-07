import React, { useState, useEffect } from 'react';
import '../Stylesheets/container.css';
import WxForm from './Form';
import SpaceWeather from './SpaceWeather';


const Container = (props) => {
    const [weatherData, setWeatherData] = useState({})

    return  <div className="wx-container">
                <WxForm />
                <SpaceWeather />
            </div>
}

export default Container;