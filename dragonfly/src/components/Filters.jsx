import React, { useContext } from "react";
import { FiltersContex } from "../context/FiltersContext";

function Filters() {
  const { setFilterType, setIsFiltering } = useContext(FiltersContex);

  const updateFilter = (event) => {
    setIsFiltering(true);
    setFilterType(event.target.innerHTML);
  }

  const removeFilters = (event) => {
    setIsFiltering(false);
    setFilterType(event.target.innerHTML);
  }

  return (
    <ul>
      <button onClick={(e) => {updateFilter(e)}}>Music</button>
      <button onClick={(e) => {updateFilter(e)}}>Comedy</button>
      <button onClick={(e) => {updateFilter(e)}}>Activites</button>
      <button onClick={(e) => {updateFilter(e)}}>Kids</button>
      <button onClick={(e) => {removeFilters(e)}}>None</button>
    </ul>
  );
}

export default Filters;
