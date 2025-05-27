import React, { useContext, useEffect } from "react";
import EventData from "../data/EventDataHandler";
import { EventOTDContext } from "../context/EventOTDContext";
import { useNavigate } from "react-router-dom";

function EventOTD() {
  const { EventOTDIndex, updateEventOTD } = useContext(EventOTDContext);

  const navigate = useNavigate();

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    navigate("/event/" + eventId);
  };

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
    <section id="eventOTD-section">
      <div id="first-part" onClick={(e) => {OnViewClick(EventData[EventOTDIndex].id, e)}}>
        <h4>Explore our featured event of the day!</h4>
        <img
          id="eventOTD-image"
          src={EventData[EventOTDIndex].image}
          alt="Picture of the event of the day"
        />
        <h5>{EventData[EventOTDIndex].name}</h5>
        <p>{EventData[EventOTDIndex].date}</p>
      </div>
      <p className='responsiveness-hide'>{EventData[EventOTDIndex].description}</p>
    </section>
  );
}

export default EventOTD;
