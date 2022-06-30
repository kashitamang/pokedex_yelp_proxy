// import logo from './logo.svg';
import './App.css';
import PokemonSearch from './Components/PokemonSearch';
import YelpSearch from './Components/YelpSearch';
import WeatherSearch from './Components/WeatherSearch';


function App() {
  return (
    <div className="App">
      <WeatherSearch/>
      <YelpSearch/>
      <PokemonSearch/>
    </div>
  );
}

export default App;
