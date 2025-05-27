import React from 'react'
import { Link } from 'react-router-dom'
import "./NavigationBar.css"

function NavigationBar() {

  return (
    <nav className='header-container'>
        <div>
            <img src="/images/Lego.jpg" alt="Dragonfly Logo" className='logo'/>
            <p>Dragonfly</p>
        </div>
        <div className='nav-bar'>
            <ul className='nav-items'>
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
        </div>
    </nav>
  )
}

export default NavigationBar
