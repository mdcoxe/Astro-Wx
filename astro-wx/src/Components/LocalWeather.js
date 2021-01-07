import React, { useState, useEffect } from 'react';
import '../Stylesheets/localweather.css';
const LocalWeather = () => {






//     const [zipCode, setZipCode] = useState('')
//     const [weatherData, setWeatherData] = useState({})
  
//     const updateZipCode = async () => {
//       try {
//         const apiEndpoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=40f68d683f769f88816b06798d2cb216`
//         const response = await fetch(apiEndpoint);
//         const data = await response.json();
//         setWeatherData(data);
//       } catch{
//         console.log('You failed...blizzzicanedo incoming')
//       }
//     }
  
//     useEffect(() => {
//       updateZipCode();
//     }, []);
  
//     const handleSubmit = (e) =>{
//       e.preventDefault();
//       updateZipCode();
//       setZipCode('');
//     };
  
    return (
        <div className="local-wx">
            <h2 className="city-name">City Name</h2>

            <div className="overcast">
                <img src="" className="overcast-img" alt=""/>
                <span className="overcast-description">Weather Description</span>
            </div>
            <div className="current-weather">
                <span className="humidity">Humidity: X%</span>
                <span className="curr-temp">Temp: X°F</span>
                <span className="feels-like">Feels like: X°F</span>
            </div>
            <div className="temps">
                <span className="min-temp">Low: X°F</span>
                <span className="max-temp">High: X°F</span>
            </div>
        </div>
);





//       <div className="App">
//         {/* form to enter zip code */}
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="zip-code"> Enter Zip Code</label>
//           <input type="text" id="zip-code" value={zipCode} onChange={(e) => {setZipCode(e.target.value)}}/>
//         </form>
//           {/* data display section */}      
//           {/* display city name .name */}
//           <p>{weatherData.name}</p>
//           {/* display temp main.temp*/}
//           <p>{weatherData.main && weatherData.main.temp}</p>
//           {/* display (snow, rain, ...)  = .weather.main */}
//           <p>{weatherData.weather && weatherData.weather[0].main}</p>
//           {/* Min */}
//           <p>{weatherData.main && weatherData.main.temp_min}</p>
//           {/* Max */}
//           <p>{weatherData.main && weatherData.main.temp_max}</p>
//       </div>
//     );
}

export default LocalWeather;