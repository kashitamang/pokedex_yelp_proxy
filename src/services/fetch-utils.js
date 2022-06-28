//hitting our netlify function 

export async function
getPokemon(){
  const rawData = await fetch('http://localhost:8888/.netlify/functions/pokemon-endpoint');
  const data = await rawData.json();

  return data;
}