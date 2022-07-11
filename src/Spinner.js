import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <div>
      <p>almost ready...</p>
      <img src={spinner} alt="loading..."/>
    </div>
  );
}