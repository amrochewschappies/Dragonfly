import { createContext, useState } from "react";

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favouritesIDs, setFavouritesIds] = useState([]);

  const updateFavourites = (newId) => {
    if (favouritesIDs.includes(newId)) {
      setFavouritesIds(favouritesIDs.filter((item) => item !== newId));
    } else {
      setFavouritesIds((prevFavourites) => [...prevFavourites, newId]);
    }
  };

  const removeFavourite = (id) => {
    setFavouritesIds((prev) => prev.filter((favID) => favID !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favouritesIDs, updateFavourites, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
