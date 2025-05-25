import React from "react";
import { useNavigate } from "react-router-dom";

function EventsCTA() {
    const navigate = useNavigate(); 

    const SeeAllEventsClick = (event) => {
        event.preventDefault();
        navigate("/Events")
    }

  return (
    <section id="eventsCTA-section">
      <div>
        <h4>Explore all events</h4>
        <p>
          Want to see what's coming up? Browse through all the exciting events
          happening near you and beyond. There's something happening for everyone!
        </p>
        <button onClick={(event) => {SeeAllEventsClick(event)}} id="cta-button">See All</button>
      </div>
      <img src="/Images/Origami.jpg" alt="" id="eventsCTA-image"/>
    </section>
  );
}

export default EventsCTA;
