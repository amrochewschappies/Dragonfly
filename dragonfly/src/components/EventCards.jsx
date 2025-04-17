import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import EventData from '../Data/EventDataHandler';

function EventCards() {
    
    const navigator = useNavigate();

    const OnViewClick = (eventId, e) => {
      e.preventDefault();
      navigator("/event/" + eventId);
    }

  return (
    <nav>
      <ul>
        {EventData.map((event, index) => {
            return (
                <li key={index}>
                    <h3>{event.name}</h3>
                    <p>{event.image}</p>
                    <p>{event.location}</p>
                    <p>{event.date}</p>
                    <p>{event.description}</p>
                    <p>{event.genre}</p>
                    <button onClick={(e) => {OnViewClick(index, e)}}>View Event</button>
                </li>
            )
        })}
      </ul>
    </nav>
  )
}

export default EventCards
