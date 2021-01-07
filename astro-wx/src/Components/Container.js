import React, { useState, useEffect } from 'react';
import '../Stylesheets/container.css';
import WxForm from './Form';
import Panels from './Panels';


const Container = (props) => {
    const [weatherData, setWeatherData] = useState({})

    return  <div className="wx-container">
                <WxForm />
                <Panels weatherData={weatherData} />
            </div>
}

export default Container;