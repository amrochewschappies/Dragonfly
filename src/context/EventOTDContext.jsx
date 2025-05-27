import { createContext, useState } from 'react'

export const EventOTDContext = createContext();

function EventOTDContextProvider({children}) {
    const [EventOTDIndex, setEventOTDIndex] = useState(null);

    const updateEventOTD = (newIndex) => {
        if (EventOTDIndex == null){
            setEventOTDIndex(newIndex)
        }
    }

  return (
    <EventOTDContext.Provider value={{updateEventOTD, EventOTDIndex}}>
        {children}
    </EventOTDContext.Provider>
  )
}

export default EventOTDContextProvider
