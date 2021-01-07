
import '../Stylesheets/spaceweather.css';
const SpaceWeather = () => {
    return  <div className="space-container">
                <h1>Space Weather</h1>  
                <div className="swx-overview">
                  <img src="https://services.swpc.noaa.gov/images/swx-overview-small.gif" alt="Space Weather Overview"  />
               
                <div className="space-forecast">
                  <iframe src="https://services.swpc.noaa.gov/text/3-day-forecast.txt" 
                    frameBorder="10" 
                    title="3 Day Space Weather Forecast"
                    width="400px"
                    max-width="500px"
                    height="450px"
                    max-height="500px"
                    >
                  </iframe>
                </div>
                </div>
                    <p>Space Weather data and images sourced from <a href="https://www.swpc.noaa.gov/content/data-access">NOAA Space Weather Prediction Center</a></p>
            </div>
}

export default SpaceWeather;