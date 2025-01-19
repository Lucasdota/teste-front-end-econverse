import React from 'react'
import NewsLetter from './NewsLetter'
import Information from './Information'
import BottomBar from './BottomBar'

export default function Footer() {
  return (
	<section className='footer-container'>
		<NewsLetter />
		<Information />
		<BottomBar />
	</section>
  )
}
