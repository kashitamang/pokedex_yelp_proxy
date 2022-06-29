import React from 'react';

export default function BusinessList({ businesses }) {
  return (
    <div className="business-list">
      <h1>Yelp By City</h1>
      {
        businesses.map((business, i) => <div className="business" key={business.name + i}>
          <p>{business.name}</p>
        </div>)
      }
    </div>
  );
}
