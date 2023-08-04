import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BudgetCard from "./assets/components/BudgetCard";
import ExpenseCard from "./assets/components/ExpenseCard";
import Overview from "./assets/components/Overview";
import ExpenseList from "./assets/components/ExpenseLIst";

function App() {
  const [budgetTotal, setBudgetTotal] = useState(0);

  const handleSetBudget = (newBudgetTotal) => {
    setBudgetTotal(newBudgetTotal);
  };

  return (
    <div className="h-screen flex flex-col align-middle mt-8">
      <div className="flex gap-16">
        <BudgetCard setBudgetTotal={handleSetBudget} />
        <ExpenseCard />
      </div>
      <Overview budgetTotal={budgetTotal} />
      <ExpenseList />
    </div>
  );
}

export default App;
