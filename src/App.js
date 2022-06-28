import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);

  useEffect(() => {
    async function loadPokemonData() {
      const data = await getPokemon();

      console.log(data);
      setPokemon(data.results);
    }
    loadPokemonData();
  }, []);
    
  async function handleSubmit(e){
    e.preventDefault();

  }
  console.log(pokemonQuery);
    
  return (
    <div className="App">
      <header className="App-proxies">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={e => setPokemonQuery(e.target.value)}></input>
          <button>search</button>
        </form>
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
