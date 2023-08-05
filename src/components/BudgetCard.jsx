import React, { useState } from "react";

function BudgetCard({ setBudgetTotal }) {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setBudgetTotal(inputValue); // Call the callback function with the input value
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick(e); // Call the same function used for handling click event
    }
  };

  return (
    <div className="flex flex-col text-left font-raleway w-1/2 p-10 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col flex-grow">
        <h2 className="font-normal text-xl mb-4">Budget</h2>
        <input
          className="p-4 border-2 rounded-lg"
          type="number"
          placeholder="Enter Total Amount"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        {/* Add an empty flex-grow element to push the button to the bottom */}
        <div className="flex-grow"></div>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="w-1/3 p-2 text-white bg-blue-700 rounded-md"
      >
        Set Budget
      </button>
    </div>
  );
}

export default BudgetCard;
