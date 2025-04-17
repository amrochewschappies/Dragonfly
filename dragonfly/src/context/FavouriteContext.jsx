import { createContext, useState } from 'react';

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favouritesIDs, setFavouritesIds] = useState(["0"]);

  const updateFavourites = (newId) => {
    if (favouritesIDs.includes(newId)){
        setFavouritesIds(favouritesIDs.filter((item) => item !== newId))
    }
    else{
        setFavouritesIds((prevFavourites) => [...prevFavourites, newId]);
    }
  };

  return (
    <FavouritesContext.Provider value={{ favouritesIDs, updateFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
