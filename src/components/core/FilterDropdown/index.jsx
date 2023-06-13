import React from "react";

const FilterDropdown = ({ options, onSelect }) => {
  const handleSelect = (event) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <select onChange={handleSelect} className="mr-130 p-4 filter">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
