import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventData from "../Data/EventDataHandler";
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
            <li key={index}>
              <h3>{event.name}</h3>
              <p>{event.image}</p>
              <p>{event.location}</p>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <p>{event.genre}</p>
              <button
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
          <li key={index}>
            <h3>{event.name}</h3>
            <p>{event.image}</p>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <p>{event.genre}</p>
            <button
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
      <ul>{displayedEvents}</ul>
    </nav>
  );
}

export default EventCards;
