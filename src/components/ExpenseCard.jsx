import React, { useState } from "react";

function ExpenseCard({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleAddExpense = () => {
    if (expenseName.trim() !== "" && expenseAmount !== "") {
      onAddExpense(expenseName, parseFloat(expenseAmount));
      setExpenseName("");
      setExpenseAmount("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddExpense();
    }
  };

  return (
    <div className="flex flex-col text-left justify-between font-raleway w-1/2 p-10 bg-white rounded-lg shadow-lg">
      <h2 className="font-normal text-xl mb-4">Expenses</h2>
      <input
        className="p-4 border-2 rounded-lg"
        type="text"
        placeholder="Enter Expense Category"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        onKeyPress={handleKeyPress} // Handle Enter key press
      />
      <br />
      <input
        className="p-4 border-2 rounded-lg"
        type="number"
        placeholder="Enter Amount"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        onKeyPress={handleKeyPress} // Handle Enter key press
      />
      <br />
      <button
        type="button"
        className="w-1/3 p-2 text-white bg-blue-700 rounded-md hover:bg-opacity-75 shadow-lg"
        onClick={handleAddExpense}
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseCard;
