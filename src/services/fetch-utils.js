//hitting our netlify function 

export async function
getPokemon(filter){
  const rawData = await fetch(`http://localhost:8888/.netlify/functions/pokemon-endpoint?pokeQuery=${filter}`);
  const data = await rawData.json();

  return data;
}