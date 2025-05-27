import { createContext, useState } from 'react'

export const SearchContext = createContext();

function SearchContextProvider({children}) {
    const [isSearching, setIsSearching] = useState(false);

    const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{isSearching, setIsSearching, searchInput, setSearchInput}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
