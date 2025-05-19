import React, { useContext, useEffect } from 'react'
import EventData from '../data/EventDataHandler'
import { EventOTDContext } from '../context/EventOTDContext'

function EventOTD() {
    const {EventOTDIndex, updateEventOTD} = useContext(EventOTDContext)
    
    useEffect(() => {
        if (EventOTDIndex == null) {
            const randomIndex = Math.floor(Math.random() * EventData.length);
            updateEventOTD(randomIndex);
        }
    }, [EventOTDIndex, updateEventOTD]);

    if (EventOTDIndex === null) {
        return <p>Loading...</p>; 
    }

  return (
    <section>
        <p>Explore our featured event of the day</p>
        <img id='eventOTD-image' src={EventData[EventOTDIndex].image} alt="Picture of the event of the day" />
        <p>{EventData[EventOTDIndex].name}</p>
        <p>{EventData[EventOTDIndex].date}</p>
    </section>
  )
}

export default EventOTD
