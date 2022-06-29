import React from 'react';

export default function BusinessList({ businesses }) {
  return (
    <div className="business-list">
      <h1>Yelp By City</h1>
      {
        businesses.map((business, i) => <div className="business" key={business.name + i}>
          <h3>{business.name}</h3>
          <p>{business.price} {business.transactions}</p>
          <img src={business.image_url}/>
        </div>)
      }
    </div>
  );
}
