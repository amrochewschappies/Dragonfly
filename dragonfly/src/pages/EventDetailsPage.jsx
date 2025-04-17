import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventData from '../Data/EventDataHandler';

function EventDetailsPage() {
  const {eventID} = useParams();

  const [selectedEvent, setSelectedEvent] = useState([]);

  useEffect(() => {
    if (eventID){
      setSelectedEvent(EventData[eventID]);
      console.log(EventData[eventID]);
      //console.log(selectedEvent);
    }
  }, [eventID])


  return (
    <div>
      <h1>This is the events details page</h1>
      {/* <ul>
        {selectedEvent.map((detail) => {
          return (
            <li>
              {detail}
            </li>
          )
        })}
      </ul> */}
      
    </div>
  )
}

export default EventDetailsPage
