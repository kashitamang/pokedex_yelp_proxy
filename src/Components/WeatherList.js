import React from 'react';

export default function WeatherList({ weatherData: { temp } }) {
    // convertToArray({}) => []

  return (
    <div className="weather-list">
      <h1>Search Weather By City </h1>
      <p>currently: {temp} degrees </p>
    </div>
  );
}
