import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventData from "../data/EventDataHandler";
import { FavouritesContext } from "../context/FavouriteContext";
import "./EventDetailsPage.css";

function EventDetailsPage() {
  const navigate = useNavigate();

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

  const onReturnClick = (e) => {
    e.preventDefault();
    navigate("/events");
  };

  return (
    <Fragment>
      <ul>
        <div id="image-container">
          <svg
            id="return-button"
            onClick={(e) => onReturnClick(e)}
            fill="#000000"
            width="64"
            height="49"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>return</title>
            <path d="M0 21.984q0.032-0.8 0.608-1.376l4-4q0.448-0.48 1.056-0.576t1.12 0.128 0.864 0.736 0.352 1.12v1.984h18.016q0.8 0 1.408-0.576t0.576-1.408v-8q0-0.832-0.576-1.408t-1.408-0.608h-16q-0.736 0-1.248-0.416t-0.64-0.992 0-1.152 0.64-1.024 1.248-0.416h16q2.464 0 4.224 1.76t1.76 4.256v8q0 2.496-1.76 4.224t-4.224 1.76h-18.016v2.016q0 0.64-0.352 1.152t-0.896 0.704-1.12 0.096-1.024-0.544l-4-4q-0.64-0.608-0.608-1.44z"></path>
          </svg>

          <img src={selectedEvent.image} id="event-image" />
        </div>
        
        <h4 className="event-information">{selectedEvent.name}</h4>
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
