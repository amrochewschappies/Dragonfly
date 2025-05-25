import React from "react";
import EventData from "../data/EventDataHandler";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function SearchResults() {
  const { searchInput } = useContext(SearchContext);

  let updatedEvents = EventData;

  const navigate = useNavigate();

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    navigate("/event/" + eventId);
  };

  updatedEvents = updatedEvents.filter(
    (event) =>
      event.name &&
      typeof event.name === "string" &&
      event.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <nav id="parent-container">
      <ul className="events-container">
        {updatedEvents.map((event) => (
          <li
            key={event.name}
            className="event-card"
            onClick={(e) => OnViewClick(EventData.indexOf(event), e)}
          >
            <img src={event.image} className="event-image" alt={event.name} />
            <p id="event-name">{event.name}</p>
            <p id="event-date">{event.date}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SearchResults;
