import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {

  return (
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/events"}>Events</Link>
                <Link to={"/favourites"}>Favourites</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationBar
