import React from "react";
import { useNavigate } from "react-router-dom";

function EventsCTA() {
    const navigate = useNavigate(); 

    const SeeAllEventsClick = (event) => {
        event.preventDefault();
        navigate("/Events")
    }

  return (
    <section>
      <h3>Explore all events</h3>
      <p>
        Want to see what's coming up? Browse through all the exciting events
        happening near you and beyond. There's something happening for everyone!
      </p>
      <button onClick={(event) => {SeeAllEventsClick(event)}}>See All</button>
    </section>
  );
}

export default EventsCTA;
