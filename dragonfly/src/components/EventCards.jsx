import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventData from "../data/EventDataHandler";
import { FiltersContex } from "../context/FiltersContext";

function EventCards() {
  const { isFiltering, filterType } = useContext(FiltersContex);

  const navigator = useNavigate();

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    navigator("/event/" + eventId);
  };

  const [displayedEvents, setDisplayedEvents] = useState([]);

  useEffect(() => {
    const eventsToDisplay = EventData.map((event, index) => {
      if (isFiltering) {
        if (event.genre == filterType) {
          return (
            <li key={index} className='event-card'>
              <img src={event.image} className="event-image"></img>
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <button className="view-event-button"
                onClick={(e) => {
                  OnViewClick(index, e);
                }}
              >
                View Event
              </button>
            </li>
          );
        }
      } else {
        return (
          <li key={index} className='event-card'>
            <img src={event.image} className="event-image"></img>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <button className="view-event-button"
              onClick={(e) => {
                OnViewClick(index, e);
              }}
            >
              View Event
            </button>
          </li>
        );
      }
    });

    setDisplayedEvents(eventsToDisplay);
  }, [filterType]);

  return (
    <nav>
      <ul className="events-container">{displayedEvents}</ul>
    </nav>
  );
}

export default EventCards;
