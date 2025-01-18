import React from 'react'
import Content from './Content'

export default function Banner() {
  return (
	<section className='banner-container'>
		<img className='banner-img' src='/Banner.png' alt='banner' />
		<Content />
	</section>
  )
}
