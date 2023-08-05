import React, { useState } from "react";

function ExpenseList({ expenseList, onUpdate }) {
  const handleClick = (index) => {
    onUpdate((prevExpenses) => {
      const updatedExpenses = prevExpenses.map((expense, i) => {
        if (i === index) {
          return {
            ...expense,
            isEditing: !expense.isEditing,
          };
        }
        return expense;
      });

      // Make sure that when editing is toggled off, the amount is still saved as a number
      if (!updatedExpenses[index].isEditing) {
        updatedExpenses[index].amount = parseFloat(
          updatedExpenses[index].amount
        );
      }

      return updatedExpenses;
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.keyCode === 13) {
      // Pressed Enter key
      handleClick(index);
    }
  };

  const handleAddExpense = (name, amount) => {
    const newExpense = {
      name,
      amount: parseFloat(amount),
      isEditing: false, // Set isEditing to false for the new expense initially
    };
    onUpdate((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleAmountChange = (index, event) => {
    const updatedExpenses = [...expenseList];
    updatedExpenses[index].amount = parseFloat(event.target.value);
    onUpdate(updatedExpenses);
  };

  const handleDeleteExpense = (index) => {
    onUpdate((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((_, i) => i !== index);
      return updatedExpenses;
    });
  };

  return (
    <div className="bg-white mt-8 rounded-md px-8 py-10 text-lg grid gap-6 shadow-lg">
      <h1 className="text-xl text-left mb-4">Expense List</h1>
      {expenseList.length === 0 ? (
        <p className="text-gray-500">Add an item to get started!</p>
      ) : (
        expenseList.map((expense, index) => (
          <div key={index} className="grid grid-cols-3 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-8 bg-blue-700 mr-6"></div>
              <p>{expense.name}</p>
            </div>
            {expense.isEditing ? (
              <input
                className="col-span-1 border-2"
                type="text"
                defaultValue={expense.amount}
                onChange={(event) => handleAmountChange(index, event)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ) : (
              <div className="col-span-1">
                <span>{expense.amount}</span>
              </div>
            )}
            <div className="flex flex-row gap-3 col-span-1 justify-end">
              <p className="cursor-pointer" onClick={() => handleClick(index)}>
                <svg
                  className="w-6 h-6 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                  <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                </svg>
              </p>

              <p
                className="cursor-pointer"
                onClick={() => handleDeleteExpense(index)}
              >
                <svg
                  className="w-6 h-6 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  {
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                    />
                  }
                </svg>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
