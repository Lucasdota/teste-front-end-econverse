import React from 'react'
import Title from '../shared/Title'
import Showcase from '../shared/Showcase'

export default function ShowcaseTwo() {
  return (
	<section aria-labelledby='showcase-title' className='showcase-section-container'>
		<Title />
		<span className='showcaseTwo-span'>Ver todos</span>
		<Showcase />
	</section>
  )
}
