import React, { useContext, useState } from "react";
import { FiltersContex } from "../context/FiltersContext";

function Filters() {
  const { setFilterType, setIsFiltering } = useContext(FiltersContex);
  const [selectedFilter, setSelectedFilter] = useState();

  const updateFilter = (event) => {
    setIsFiltering(true);
    setFilterType(event.target.innerHTML);
    setSelectedFilter(event.target.innerHTML);
  }

  const removeFilters = (event) => {
    setIsFiltering(false);
    setFilterType(event.target.innerHTML);
    setSelectedFilter("None");
  }

  return (
    <ul id="filters-container">
      <p style={{textDecoration : "underline", textUnderlineOffset: "6px"}} className="responsiveness-hide">Filters</p>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Music" ? "underline" : "none"}}>Music</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Comedy" ? "underline" : "none"}}>Comedy</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Activities" ? "underline" : "none"}}>Activities</button>
      <button onClick={(e) => {updateFilter(e)}} className="filter-option" style={{textDecoration : selectedFilter === "Kids" ? "underline" : "none"}}>Kids</button>
      <button onClick={(e) => {removeFilters(e)}} className="filter-option" style={{textDecoration : selectedFilter === "None" ? "underline" : "none"}}>None</button>
    </ul>
  );
}

export default Filters;
