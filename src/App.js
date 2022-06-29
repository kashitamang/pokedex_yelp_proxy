// import logo from './logo.svg';
import './App.css';
import PokemonSearch from './Components/PokemonSearch';
import YelpSearch from './Components/YelpSearch';


function App() {
  // console.log(yelpQuery);
  return (
    <div className="App">
      <YelpSearch/>
      <PokemonSearch/>
    </div>
  );
}

export default App;
