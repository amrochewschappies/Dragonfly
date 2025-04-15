import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
        <Route path="/events" element={<EventsPage />}/>
        <Route path="/event/:eventID" element={<EventDetailsPage />}/>
      </Routes>
      <div className="App">

      </div>
    </BrowserRouter>
  );
}

export default App;
