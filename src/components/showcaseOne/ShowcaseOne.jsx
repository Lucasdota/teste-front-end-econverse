import React from 'react';
import Title from '../shared/Title.jsx';
import Tags from './Tags.jsx';
import Showcase from '../shared/Showcase.jsx';

export default function ShowcaseOne() {
  return (
    <section
		id="first-showcase"
      aria-labelledby="showcase-title"
      className="showcase-section-container"
    >
      <Title />
      <Tags />
      <Showcase />
    </section>
  );
}
