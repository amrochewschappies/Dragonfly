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
    <section id='eventOTD-section'>
        <div>
            <h5>Explore our featured event of the day!</h5>
            <img id='eventOTD-image' src={EventData[EventOTDIndex].image} alt="Picture of the event of the day" />
            <h5>{EventData[EventOTDIndex].name}</h5>
            <p>{EventData[EventOTDIndex].date}</p>
        </div>
        <p>{EventData[EventOTDIndex].description}</p>
    </section>
  )
}

export default EventOTD
