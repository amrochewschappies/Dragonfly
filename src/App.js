import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import SearchPage from "./pages/SearchPage";
import NavigationBar from "./components/NavigationBar";
import Cursor from "./components/Cursor";
import "./pages/GeneralStyling.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cursor />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:eventID" element={<EventDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
