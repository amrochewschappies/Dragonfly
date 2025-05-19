import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import EventOTD from '../components/EventOTD'
import EventsCTA from '../components/EventsCTA'
import Highligts from '../components/Highligts'
import Footer from '../components/Footer'
import "./HomePage.css"

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <EventOTD />
      <EventsCTA />
      <Highligts />
      <Footer />
    </Fragment>
  )
}

export default HomePage
