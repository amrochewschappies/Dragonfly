import React, { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../context/FavouriteContext";
import EventData from "../data/EventDataHandler";

function FavouritesPage() {
  const { favouritesIDs, removeFavourite } = useContext(FavouritesContext);

  const [eventsArray, setEventsArray] = useState([]);

  const [hasFavourites, setHasFavourites] = useState(false)

  useEffect(() => {
    if (favouritesIDs.length > 0) {
      const events = favouritesIDs.map((eventID) => EventData[eventID]);
      setEventsArray(events);
      setHasFavourites(true);
    }
    else{
      setEventsArray([]);
      setHasFavourites(false)
    }
  }, [favouritesIDs]);

  const HandleRemove = (ArrayIndex) => {
    const IdToRemove = favouritesIDs[ArrayIndex]
    removeFavourite(IdToRemove)
  }

  return (
    <div>
      <h3 style={{display : hasFavourites ? "none" : "block"}}>You have no favourites</h3>
      <ul>
        {eventsArray.map((event, index) => (
          <li key={index}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <button onClick={() => {HandleRemove(index)}}>Unfavourite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouritesPage;
