import React from 'react'
import Title from '../shared/Title'
import Tags from './Tags'
import Showcase from '../shared/Showcase'

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
