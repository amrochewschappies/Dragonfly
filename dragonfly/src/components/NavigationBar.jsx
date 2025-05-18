import React from 'react'
import { Link } from 'react-router-dom'
import "./NavigationBar.css"

function NavigationBar() {

  return (
    <nav className='header-container'>
        <img src="/images/Lego.jpg" alt="Dragonfly Logo" className='logo'/>
        <ul className='nav-bar'>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/events"}>Events</Link>
            </li>
            <li>
                <Link to={"/favourites"}>Favourites</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationBar
