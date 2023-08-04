import { useState } from "react";

function Overview({ budgetTotal }) {
  return (
    <div className="bg-blue-700 w-full max-h-2/5 rounded-md flex justify-between text-white px-24 py-8 mt-8 text-lg shadow-sm">
      <div className="flex flex-col gap-2">
        <p>Total Budget</p>
        <p>${budgetTotal}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Expense</p>
        <p>$6500</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Balance</p>
        <p>$1500</p>
      </div>
    </div>
  );
}

export default Overview;
