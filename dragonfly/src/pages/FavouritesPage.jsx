import React, { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../context/FavouriteContext";
import EventData from "../Data/EventDataHandler";

function FavouritesPage() {
  const { favouritesIDs } = useContext(FavouritesContext);

  const [eventsArray, setEventsArray] = useState([]);

  useEffect(() => {
    if (favouritesIDs.length > 0) {
      const events = favouritesIDs.map((eventID) => EventData[eventID]);
      setEventsArray(events);
    }
  }, [favouritesIDs]);

  useEffect(() => {
    if (eventsArray) {
      console.log(eventsArray);
    }
  }, [eventsArray]);

  return (
    <div>
      <ul>
        {eventsArray.map((event, index) => (
          <li key={index}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouritesPage;
