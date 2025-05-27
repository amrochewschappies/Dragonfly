import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FavouritesProvider from "./context/FavouriteContext";
import FiltersContextProvider from "./context/FiltersContext";
import EventOTDContextProvider from "./context/EventOTDContext";
import SearchContextProvider from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouritesProvider>
      <FiltersContextProvider>
        <EventOTDContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </EventOTDContextProvider>
      </FiltersContextProvider>
    </FavouritesProvider>
  </React.StrictMode>
);
