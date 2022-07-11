//hitting our netlify function 

export async function
getPokemon(filter){
  const rawData = await fetch(`/.netlify/functions/pokemon-endpoint?pokeQuery=${filter}`);
  const data = await rawData.json();
  
  console.log('hello from getPokemon');
  return data;
}
export async function
getYelp(filter){
  const rawData = await fetch(`/.netlify/functions/yelp-endpoint?yelpQuery=${filter}`);
  const data = await rawData.json();

  return data;
}
export async function
getWeather(filter){
  const rawData = await fetch(`/.netlify/functions/weather-endpoint?weatherQuery=${filter}`);
  const data = await rawData.json();

  return data;
}
