import React, { useState, useEffect } from 'react';
import LocalWeather from './LocalWeather';
import WxForm from './WxForm';
import WxPanels from './WxPanels';


const Container = (props) => {
    const [weatherData, setWeatherData] = useState({})

    return  <div className="wx-container">
                <WxForm />
                <WxPanels weatherData={weatherData} />
            </div>
}

export default Container;