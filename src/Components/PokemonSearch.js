import React from 'react';
import { getPokemon } from '../services/fetch-utils';
import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');
  
  async function loadPokemonData() {
    const data = await getPokemon(pokemonQuery);
  
      // console.log(data);
    setPokemon(data.results);
  }
  
  useEffect(() => {
    loadPokemonData();
  }, []);
      
  async function handleSubmit(e){
    e.preventDefault();
      //use state to search for particular pokemon 
    loadPokemonData();
       
    setPokemonQuery('');
  }
    // console.log(pokemonQuery);
      
  return (
    <div className="pokemon-search">
      <form onSubmit={handleSubmit}>
        <input value={pokemonQuery} onChange={e => setPokemonQuery(e.target.value)}></input>
        <button>search</button>
      </form>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}
