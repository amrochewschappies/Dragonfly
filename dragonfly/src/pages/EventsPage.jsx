import React from "react";
import EventCards from "../components/EventCards";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import "./EventsPage.css"

function EventsPage() {
  return (
    <div>
      <SearchBar />
      <Filters />
      <EventCards />
    </div>
  );
}

export default EventsPage;
