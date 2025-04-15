import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function EventCards() {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        setEvents([
            {
                name: "Event name", 
                image: "mock url", 
                location: "Location",
                date: "date",
                price: "price",
                description: "description",
                genre: "genre",
            },
            {
                name: "Second Event name", 
                image: "Second mock url", 
                location: "Second Location",
                date: "Second date",
                price: "Second price",
                description: "Second description",
                genre: "Second genre",
            }
        ])
    }, [])
    
    const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {events.map((event, index) => {
            return (
                <li key={index}>
                    <h3>{event.name}</h3>
                    <p>{event.image}</p>
                    <p>{event.location}</p>
                    <p>{event.date}</p>
                    <p>{event.description}</p>
                    <p>{event.genre}</p>
                    <button>View Event</button>
                </li>
            )
        })}
      </ul>
    </nav>
  )
}

export default EventCards
