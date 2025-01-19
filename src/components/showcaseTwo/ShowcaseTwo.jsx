import React from 'react';
import Title from '../shared/Title.jsx';
import Showcase from '../shared/Showcase.jsx';

export default function ShowcaseTwo() {
  return (
	<section aria-labelledby='showcase-title' className='showcase-section-container'>
		<Title />
		<span className='showcaseTwo-span'>Ver todos</span>
		<Showcase />
	</section>
  )
}
