import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FavouritesProvider from "./context/FavouriteContext";
import FiltersContextProvider from "./context/FiltersContext";
import EventOTDContextProvider from "./context/EventOTDContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouritesProvider>
      <FiltersContextProvider>
        <EventOTDContextProvider>
          <App />
        </EventOTDContextProvider>
      </FiltersContextProvider>
    </FavouritesProvider>
  </React.StrictMode>
);
