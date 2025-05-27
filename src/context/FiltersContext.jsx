import { createContext, useState } from "react"

export const FiltersContex = createContext();

function FiltersContextProvider({children}) {

    const [isFiltering, setIsFiltering] = useState(false);

    const [filterType, setFilterType] = useState("none");
    
    return (
        <FiltersContex.Provider value={{isFiltering, setIsFiltering, filterType, setFilterType}}>
            {children}
        </FiltersContex.Provider>
    )
}

export default FiltersContextProvider
