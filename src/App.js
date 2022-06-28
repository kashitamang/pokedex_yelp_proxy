import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemonData() {
      const data = await getPokemon();

      console.log(data);
      setPokemon(data.results);
    }
    loadPokemonData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          pokemon.map((poke, i) => <div className="pokemon"key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>)
        }
      </header>
    </div>
  );
}

export default App;
