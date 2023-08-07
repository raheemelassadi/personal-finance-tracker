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

  // Calculate percentage of remaining budget
  const remainingBudgetPercentage = (balance / budgetTotal) * 100;

  // Define the colors based on the percentage
  let progressBarColor;
  if (remainingBudgetPercentage >= 75) {
    progressBarColor = "bg-green-600";
  } else if (remainingBudgetPercentage >= 90) {
    progressBarColor = "bg-yellow-500";
  } else {
    progressBarColor = "bg-red-500";
  }

  return (
    <>
      <div className="bg-blue-700 w-full max-h-2/5 rounded-md flex justify-between text-white px-6 md:px-24 py-8 mt-8 text-lg shadow-sm">
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
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-12">
        <div
          className={`h-2.5 rounded-full ${progressBarColor}`}
          style={{ width: `${remainingBudgetPercentage}%` }}
        ></div>
      </div>
    </>
  );
}

export default Overview;
