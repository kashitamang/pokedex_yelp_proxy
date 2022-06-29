import React from 'react';
import { getPokemon } from '../services/fetch-utils';
import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Spinner from '../Spinner';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);
  
  async function loadPokemonData() {
    setIsLoadingPokemon(true);
    const data = await getPokemon(pokemonQuery);
    setIsLoadingPokemon(false);
      // console.log(data);
    setPokemon(data.results);
  }
  
  useEffect(() => {
    loadPokemonData();
  }, []); //eslint-disable-line
      
  async function handleSubmit(e){
    e.preventDefault();
    // console.log('submit!!!');
      //use state to search for particular pokemon 
    await loadPokemonData();
    setPokemonQuery('');
  }
    // console.log(pokemonQuery);
      
  return (
    <div className="pokemon-search">
      <form onSubmit={handleSubmit}>
        <input value={pokemonQuery} onChange={e => setPokemonQuery(e.target.value)}></input>
        <button>search</button>
      </form>
      {
        isLoadingPokemon 
          ? <Spinner />
          : <PokemonList pokemon={pokemon} />
      }
    </div>
  );
}
