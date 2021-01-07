import { useState, useRef } from 'react';
import '../Stylesheets/form.css';

const prod = 'https://astro-wx.herokuapp.com/';
const dev = 'http://localhost:3009'
const url = (process.env.NODE_ENV ==='development' ? dev : prod)
// console.log(process.env.NODE_ENV)

const WxForm = () => {
    const [weatherData, setWeatherData] = useState({})
    const regZipCode = useRef(null);
    const saveToMongo = async (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            zipCode: regZipCode.current.value
        })
        try {
          const response = await fetch(`${url}/api/wxmongo`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
              body
          })
          const data = await response.json();
          setWeatherData(data)
          console.log(data);
        } catch (error) {
          console.error(400).json(error)
        }
      }
    
    return  <div className="wx-form">
                <div className="zipCode">
                    <form onSubmit= {saveToMongo}>
                        <label>Zipcode:
                            <input type="text" placeholder="Enter zip code" ref={regZipCode}/>
                        </label>

                        <input type="submit" value="Get Weather"/>
                    </form>
                </div>
                <div className="local-wx">
                    <h1 className="local-wx-title">Current Local Weather</h1>
                    
                    <h2 className="city-name">City: {weatherData.name}</h2>
                    <div className="local-wx-container">
                        <div className="wx-icon">
                            <img src={weatherData.weather && `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}  alt="weather-icon"/>
                        </div>
                        <div className="current-wx">
                            <span className="current-description">Current Conditions: {weatherData.weather && weatherData.weather[0].main}, {weatherData.weather && weatherData.weather[0].description}</span>
                            <p><span className="curr-temp">Current Temp: {weatherData.main && weatherData.main.temp} °F</span></p>
                            <p><span className="humidity">Humidity: {weatherData.main && weatherData.main.humidity}%</span></p>
                            
                            <span className="feels-like">Feels like: {weatherData.main && weatherData.main.feels_like}°F</span>
                        </div>
                        <div className="temps">
                            <span className="min-temp">Today's Low: {weatherData.main && weatherData.main.temp_min}°F</span>
                            <p><span className="max-temp">Today's High: {weatherData.main && weatherData.main.temp_max}°F</span></p>
                        </div>
                    </div>
                </div>
           </div>
}

export default WxForm;