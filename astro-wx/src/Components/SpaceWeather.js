// import React, { useState, useEffect } from 'react';

const SpaceWeather = () => {
    return  <div className="space-container">
                <h1>Space Weather</h1>  
                
                <img src="https://services.swpc.noaa.gov/images/swx-overview-small.gif" alt="Space Weather Overview" width="50%" />
                <div className="space-forecast">
                  <iframe src="https://services.swpc.noaa.gov/text/3-day-forecast.txt" 
                    frameborder="10" 
                    title="3 Day Space Weather Forecast"
                    width="30%"
                    height="400px">
                  </iframe>
                </div>
                <h4>
                    <p>Space Weather data and images sourced from <a href="https://www.swpc.noaa.gov/content/data-access">NOAA Space Weather Prediction Center</a></p>
                </h4>
            </div>
}

export default SpaceWeather;