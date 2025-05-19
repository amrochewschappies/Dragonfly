import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import EventOTD from '../components/EventOTD'
import EventsCTA from '../components/EventsCTA'
import "./HomePage.css"

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <EventOTD />
      <EventsCTA />
    </Fragment>
  )
}

export default HomePage
