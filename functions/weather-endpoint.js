const fetch = require('node-fetch');
require('dotenv').config();

//tells chrome to ignore CORS
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

//exports. is how we export stuff in node 
//require is how we import in node 


exports.handler = async (event) => {
  // console.log('hello!');
  try {
    // console.log('query params', event.queryStringParameters.pokeQuery);
    //fetch is how we make requests 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.queryStringParameters.weatherQuery}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`);
    const data = await response.json();
    const json = JSON.stringify(data);
    
    return { 
      statusCode: 200, 
      headers,
      //this is what the endpoint responds with
      body: json
    };
    //in the event of an error, it logs to the console
  } catch (error) {
    // console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
