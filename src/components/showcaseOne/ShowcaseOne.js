import React from 'react'
import Title from '../shared/Title'
import Tags from './Tags'
import Showcase from '../shared/Showcase'

export default function ShowcaseOne() {
  return (
	<section className='showcase-section-container'>
		<Title />
		<Tags />
		<Showcase />
	</section>
  )
}
