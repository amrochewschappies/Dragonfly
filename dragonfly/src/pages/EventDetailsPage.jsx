import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventData from "../data/EventDataHandler";
import { FavouritesContext } from "../context/FavouriteContext";
import "./EventDetailsPage.css";

function EventDetailsPage() {
  const { eventID } = useParams();

  const [selectedEvent, setSelectedEvent] = useState([]);

  const { updateFavourites, favouritesIDs } = useContext(FavouritesContext);

  const [isFavourited, setIsFavourited] = useState(false);

  useEffect(() => {
    if (eventID) {
      setSelectedEvent(EventData[parseInt(eventID)]);
    }
  }, [eventID]);

  useEffect(() => {
    if (favouritesIDs.includes(eventID)) {
      setIsFavourited(true);
    } else {
      setIsFavourited(false);
    }
  }, []);

  const setFavourite = () => {
    updateFavourites(eventID);
    setIsFavourited(isFavourited ? false : true);
  };

  return (
    <Fragment>
      <ul>
        <img src={selectedEvent.image} id="event-image"></img>
        <h3 className="event-information">{selectedEvent.name}</h3>
        <div id="flex-display" className="event-information">
          <p className="event-information">{selectedEvent.date}</p>
          <p className="event-information">{selectedEvent.location}</p>
          <p className="event-information">{selectedEvent.genre}</p>
        </div>
        <p className="event-information" id="event-description">
          {selectedEvent.description}
        </p>
        <div id="favourite-flex" className="event-information">
          <p className="event-information">{selectedEvent.price}</p>
          <svg
            id="favourite-icon"
            onClick={setFavourite}
            className={isFavourited ? "filled" : ""}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3
           c1.74 0 3.41 0.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3
           19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#000000"
              strokeWidth="1"
            />
          </svg>
        </div>
      </ul>
    </Fragment>
  );
}
export default EventDetailsPage;
