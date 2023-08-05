import { useState } from "react";

function Overview({ budgetTotal, expenseList }) {
  // Calculate expenseTotal and balance
  const calculateTotals = () => {
    let expenseTotal = 0;
    expenseList.forEach((expense) => {
      expenseTotal += expense.amount;
    });
    const balance = budgetTotal - expenseTotal;
    return { expenseTotal, balance };
  };

  // Call the calculateTotals function and get the totals
  const { expenseTotal, balance } = calculateTotals();

  return (
    <div className="bg-blue-700 w-full max-h-2/5 rounded-md flex justify-between text-white px-24 py-8 mt-8 text-lg shadow-sm">
      <div className="flex flex-col gap-2">
        <p>Total Budget</p>
        <p>${budgetTotal}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Expenses</p>
        <p>${expenseTotal}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Balance</p>
        <p>${balance}</p>
      </div>
    </div>
  );
}

export default Overview;
