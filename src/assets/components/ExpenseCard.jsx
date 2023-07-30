import React from "react";

function ExpenseCard() {
  return (
    <div className="flex flex-col text-left justify-between font-raleway w-1/2 p-10 bg-white rounded-lg shadow-lg">
      <h2 className="font-normal text-xl mb-4">Expenses</h2>
      <input
        className="p-4 border-2 rounded-lg"
        type="text"
        placeholder="Enter Expense Category"
      />
      <br />
      <input
        className="p-4 border-2 rounded-lg"
        type="number"
        placeholder="Enter Amount"
      />
      <br />
      <button
        type="button"
        className="w-1/3 p-2 text-white bg-blue-700 rounded-md"
      >
        Check Amount
      </button>
    </div>
  );
}

export default ExpenseCard;
