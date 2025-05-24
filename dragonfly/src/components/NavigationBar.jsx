import React from 'react'
import { Link } from 'react-router-dom'
import "./NavigationBar.css"

function NavigationBar() {

  return (
    <nav className='header-container'>
        <img src="/images/Lego.jpg" alt="Dragonfly Logo" className='logo'/>
        <ul className='nav-bar'>
            <li>
                <Link to={"/"}><span className='responsiveness-hide'>1.</span> Home</Link>
            </li>
            <li>
                <Link to={"/events"}><span className='responsiveness-hide'>2.</span> Events</Link>
            </li>
            <li>
                <Link to={"/favourites"}><span className='responsiveness-hide'>3.</span> Favourites</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationBar
