import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>      {
      pokemon.map((poke, i) => <div className="pokemon"key={poke.pokemon + i}>
        <p>{poke.pokemon}</p>
        <img src={poke.url_image}/>
      </div>)
    }</div>
  );
}
