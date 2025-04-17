import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventData from '../Data/EventDataHandler';

function EventDetailsPage() {
  const {eventID} = useParams();

  const [selectedEvent, setSelectedEvent] = useState([]);

  useEffect(() => {
    if (eventID){
      setSelectedEvent(EventData[parseInt(eventID)]);
    }
  }, [eventID])

  return (
    <div>
      <h1>This is the events details page</h1>
      <ul>
        <li>{selectedEvent.name}</li>
        <li>{selectedEvent.image}</li>
        <li>{selectedEvent.location}</li>
        <li>{selectedEvent.date}</li>
        <li>{selectedEvent.price}</li>
        <li>{selectedEvent.description}</li>
        <li>{selectedEvent.genre}</li>
      </ul>
      
    </div>
  )
}

export default EventDetailsPage
