import { useEffect, useState } from "react";

function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); 
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <h3>Highlights from Our Events!</h3>
      <p>
        We're excited to share some of the best moments from our events. Check
        out these incredible photos captured during our recent gatherings.
      </p>

      <div id="gallery">
        <img
          className={`images ${currentIndex === 0 ? "visible" : "invisible"}`}
          src="/Images/Lego.jpg"
          alt="Car Show"
        />
        <img
          className={`images ${currentIndex === 1 ? "visible" : "invisible"}`}
          src="/Images/Car Show.jpg"
          alt="Car Show"
        />
        <img
          className={`images ${currentIndex === 2 ? "visible" : "invisible"}`}
          src="/Images/Party.jpg"
          alt="Car Show"
        />
      </div>

      <p>
        These snapshots show the energy, excitement, and unforgettable moments
        that make our events truly special. See what you've been missing and get
        inspired for the next one!
      </p>
    </div>
  );
}

export default Highlights;
