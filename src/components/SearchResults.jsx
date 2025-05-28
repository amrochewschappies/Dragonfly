import React from "react";
import EventData from "../data/EventDataHandler";
import { SearchContext } from "../context/SearchContext";
import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersContex } from "../context/FiltersContext";

function SearchResults() {
  const { searchInput } = useContext(SearchContext);
  
  const { setIsFiltering, setFilterType } = useContext(FiltersContex);

  let updatedEvents = EventData;

  const navigate = useNavigate();

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    setIsFiltering(false);
    setFilterType("none");
    navigate("/event/" + eventId);
  };

  updatedEvents = updatedEvents.filter(
    (event) =>
      event.name &&
      typeof event.name === "string" &&
      event.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const OnReturnClick = () => {
    navigate("/events")
  }

   return (
    <nav id="parent-container">
      {updatedEvents.length > 0 ? (
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
      ) : (
        <Fragment>
          <p style={{ textAlign: "center", padding: "2rem"}}>
            No results found for "<strong>{searchInput}</strong>"
          </p>
          <button className="return-button" onClick={OnReturnClick}>return</button>
        </Fragment>
      )}
    </nav>
  );
}

export default SearchResults;