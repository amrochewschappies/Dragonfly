import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import EventOTD from '../components/EventOTD'
import EventsCTA from '../components/EventsCTA'
import Highligts from '../components/Highligts'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import "./HomePage.css"


function HomePage() {
  return (
    <Fragment>
      <main>
        <Hero />
        <SearchBar />
        <EventOTD />
        <EventsCTA />
        <Highligts />
        <Footer />
      </main>
    </Fragment>
  )
}

export default HomePage
