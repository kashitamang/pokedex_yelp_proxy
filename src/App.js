import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);

  async function loadPokemonData() {
    const data = await getPokemon(pokemonQuery);

    console.log(data);
    setPokemon(data.results);
  }

  useEffect(() => {
    loadPokemonData();
  }, []);
    
  async function handleSubmit(e){
    e.preventDefault();
    //use state to search for particular pokemon 
    loadPokemonData();

  }
  console.log(pokemonQuery);
    
  return (
    <div className="App">
      <div className="pokemon-list">
        <form onSubmit={handleSubmit}>
          <input value={pokemonQuery} type="text" onChange={e => setPokemonQuery(e.target.value)}></input>
          <button>search</button>
        </form>
        {
          pokemon.map((poke, i) => <div className="pokemon"key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
