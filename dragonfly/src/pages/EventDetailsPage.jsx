import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventData from '../Data/EventDataHandler';
import { FavouritesContext } from '../context/FavouriteContext';

function EventDetailsPage() {
  const {eventID} = useParams();

  const [selectedEvent, setSelectedEvent] = useState([]);

  const {updateFavourites, favouritesIDs} = useContext(FavouritesContext);

  const [isFavourited, setIsFavourited] = useState(false);

  useEffect(() => {
    if (eventID){
      setSelectedEvent(EventData[parseInt(eventID)]);
    }
  }, [eventID])

  useEffect(() => {
    if (favouritesIDs.includes(eventID)){
      setIsFavourited(true);
    }
    else{
      setIsFavourited(false);
    }
  }, [])

  const setFavourite = () => {
    updateFavourites(eventID);
    setIsFavourited(isFavourited ? false : true);
  }

  return (
    <div>
      <h1>This is the events details page</h1>
      <ul>
        <li>{selectedEvent.name}</li>
        <li>{selectedEvent.image}</li>
        <li>{selectedEvent.location}</li>
        <li>{selectedEvent.date}</li>
        <li>{selectedEvent.price}</li>
        <li>{selectedEvent.description}</li>
        <li>{selectedEvent.genre}</li>
        <button onClick={setFavourite} style={{backgroundColor: isFavourited ? "gray" : "green"}}>{isFavourited ? "Favourited" : "Favourite"}</button>
      </ul> 
      
    </div>
  )
}

export default EventDetailsPage
