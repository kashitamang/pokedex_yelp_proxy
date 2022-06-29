// import logo from './logo.svg';
import './App.css';
import PokemonSearch from './Components/PokemonSearch';
import { useState, useEffect } from 'react';
import { getYelp } from './services/fetch-utils';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);
  
  async function loadYelpData() {
    const data = await getYelp(yelpQuery);
  
    console.log(data);
    setBusinesses(data.businesses);
  }
      
  async function handleYelpSubmit(e){
    e.preventDefault();
      //use state to search for particular pokemon 
    await loadYelpData();
    // setYelpQuery('');
  }

  // console.log(yelpQuery);
  return (
    <div className="App">
      <PokemonSearch/>
      <div>
        <div className="yelp-search">
          <form onSubmit={handleYelpSubmit}>  
            <input value={yelpQuery} onChange={e => setYelpQuery(e.target.value)}></input>
            <button>search</button> 
          </form>
        </div>
        {
          businesses.map((business, i) => <div className="business" key={business.name + i}>
            <p>{business.name}</p>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
