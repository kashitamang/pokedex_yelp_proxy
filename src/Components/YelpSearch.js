import React from 'react';
import { useState } from 'react';
import { getYelp } from '../services/fetch-utils';
import BusinessList from '../Components/BusinessList';
import Spinner from '../Spinner';

export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);
  const [isLoadingYelp, setIsLoadingYelp] = useState(false);
    
  async function loadYelpData() {
    setIsLoadingYelp(true);
    const data = await getYelp(yelpQuery);
    setIsLoadingYelp(false);
    
      // console.log(data);
    setBusinesses(data.businesses);
  }
        
  async function handleYelpSubmit(e){
    e.preventDefault();
        //use state to search for particular pokemon 
    await loadYelpData();
      // setYelpQuery('');
  }
  return (
    <div className="yelp-search">
      <form onSubmit={handleYelpSubmit}>  
        <input value={yelpQuery} onChange={e => setYelpQuery(e.target.value)}></input>
        <button>search</button> 
      </form>
      {
        isLoadingYelp 
          ? <Spinner />
          : <BusinessList businesses={businesses}/>
      }
    </div>
  );
}
