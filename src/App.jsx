import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BudgetCard from "./assets/components/BudgetCard";
import ExpenseCard from "./assets/components/ExpenseCard";
import Overview from "./assets/components/Overview";
import ExpenseList from "./assets/components/ExpenseLIst";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-16">
        <BudgetCard />
        <ExpenseCard />
      </div>
      <Overview />
      <ExpenseList />
    </>
  );
}

export default App;
