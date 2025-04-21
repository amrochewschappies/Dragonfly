import React from "react";
import EventCards from "../components/EventCards";
import Filters from "../components/Filters";

function EventsPage() {
  return (
    <div>
      <h1>This is the events apge</h1>
      <Filters />
      <EventCards />
    </div>
  );
}

export default EventsPage;
