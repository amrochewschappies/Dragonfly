import { createContext, useState } from 'react';

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favouritesIDs, setFavouritesIds] = useState([]);

  const updateFavourites = (newId) => {
    setFavouritesIds((prevFavourites) => [...prevFavourites, newId]);
  };

  return (
    <FavouritesContext.Provider value={{ favouritesIDs, updateFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
