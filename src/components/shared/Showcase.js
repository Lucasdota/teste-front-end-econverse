import React from 'react'
import Chevrons from './showcase/Chevrons'
import Products from './showcase/Products';

export default function Showcase() {
  return (
    <div className="showcase-container">
      <Chevrons />
	  <Products />
    </div>
  );
}
