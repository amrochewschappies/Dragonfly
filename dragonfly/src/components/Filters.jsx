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
    setSelectedFilter("none");
  }

  return (
    <ul>
      <button onClick={(e) => {updateFilter(e)}} style={{backgroundColor : selectedFilter == "Music" ? "yellow" : "white"}}>Music</button>
      <button onClick={(e) => {updateFilter(e)}} style={{backgroundColor : selectedFilter == "Comedy" ? "yellow" : "white"}}>Comedy</button>
      <button onClick={(e) => {updateFilter(e)}} style={{backgroundColor : selectedFilter == "Activities" ? "yellow" : "white"}}>Activities</button>
      <button onClick={(e) => {updateFilter(e)}} style={{backgroundColor : selectedFilter == "Kids" ? "yellow" : "white"}}>Kids</button>
      <button onClick={(e) => {removeFilters(e)}} style={{backgroundColor : selectedFilter == "None" ? "yellow" : "white"}}>None</button>
    </ul>
  );
}

export default Filters;
