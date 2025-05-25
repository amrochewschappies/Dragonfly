import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { setSearchInput } = useContext(SearchContext);
  const [localInput, setLocalInput] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search"); 
    if (localInput.trim() !== "") {
      setSearchInput(localInput);
    } else {
      setSearchInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="search"
        id="search-bar"
        value={localInput}
        onChange={(e) => setLocalInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
