import { useState } from "react";

function Overview({ budgetTotal, expenses, balance }) {
  return (
    <div className="bg-blue-700 w-full max-h-2/5 rounded-md flex justify-between text-white px-24 py-8 mt-8 text-lg shadow-sm">
      <div className="flex flex-col gap-2">
        <p>Total Budget</p>
        <p>${budgetTotal}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Expenses</p>
        <p>$0{expenses}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Balance</p>
        <p>$0{balance}</p>
      </div>
    </div>
  );
}

export default Overview;
