import { useState } from "react";
import "./App.css";
import BudgetCard from "./assets/components/BudgetCard";
import ExpenseCard from "./assets/components/ExpenseCard";
import Overview from "./assets/components/Overview";
import ExpenseList from "./assets/components/ExpenseList";

function App() {
  const [budgetTotal, setBudgetTotal] = useState(0);
  const [expense, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleSetExpenses = (newSetExpenses) => {
    setExpenses(newSetExpenses);
  };

  const handleSetBalance = (newSetBalance) => {
    setBalance(newSetBalance);
  };

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
