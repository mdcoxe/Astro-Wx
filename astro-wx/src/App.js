import PullAPI from './PullAPI';
import Header from './Components/Header';
import LocalWeather from './Components/LocalWeather';
import SpaceWeather from './Components/SpaceWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <PullAPI />
      <Header />
      <LocalWeather />
      <SpaceWeather />
    </div>
  );
}

export default App;
