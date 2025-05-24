import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventData from "../data/EventDataHandler";
import { FiltersContex } from "../context/FiltersContext";
import { SearchContext } from "../context/SearchContext";

function EventCards() {
  const { isFiltering, filterType } = useContext(FiltersContex);
  const { isSearching, searchInput } = useContext(SearchContext);

  const navigate = useNavigate();

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4; 

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    navigate("/event/" + eventId);
  };

  useEffect(() => {
    let updatedEvents = EventData;

    if (isFiltering) {
      updatedEvents = updatedEvents.filter(
        (event) => event.genre === filterType
      );
    }

    if (isSearching && searchInput) {
      updatedEvents = updatedEvents.filter(
        (event) =>
          event.name &&
          typeof event.name === "string" &&
          event.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setFilteredEvents(updatedEvents);
    setCurrentPage(1);
  }, [isFiltering, filterType, isSearching, searchInput]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <nav id="parent-container">
      <ul className="events-container">
        {currentEvents.map((event, index) => (
          <li key={indexOfFirstEvent + index} className="event-card">
            <img src={event.image} className="event-image" alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <button
              className="view-event-button"
              onClick={(e) => OnViewClick(indexOfFirstEvent + index, e)}
            >
              View Event
            </button>
          </li>
        ))}
      </ul>

      <ul className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default EventCards;
