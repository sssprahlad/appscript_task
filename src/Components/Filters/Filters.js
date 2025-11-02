import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ setCategoriesFilter, categoriesFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categoriesList = [
    { id: 13, category: "All" },
    { id: 1, category: "men's clothing" },
    { id: 2, category: "jewelery" },
    { id: 3, category: "electronics" },
    { id: 4, category: "women's clothing" },
  ];

  const handleFilterClick = (getCategory) => {
    setCategoriesFilter(getCategory);
    setSelectedFilter(getCategory);
  };

  return (
    <div className="filter-container">
      {categoriesList?.map((eachCategory) => (
        <div
          className={`each-filter ${
            selectedFilter === eachCategory.category ? "active-filter" : ""
          }`}
          key={eachCategory.id}
          onClick={() => handleFilterClick(eachCategory?.category)}
        >
          <p
            className={
              selectedFilter === eachCategory.category ? "active-color" : ""
            }
          >
            {eachCategory.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Filters;
