import PullAPI from './PullAPI';
import Header from './Components/Header';
import Container from './Components/Container';
import LocalWeather from './Components/LocalWeather';
import SpaceWeather from './Components/SpaceWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
