import { useState, useEffect } from "react";
import "./App.css";
import BudgetCard from "./components/BudgetCard";
import ExpenseCard from "./components/ExpenseCard";
import Overview from "./components/Overview";
import ExpenseList from "./components/ExpenseLIst";

function App() {
  const [budgetTotal, setBudgetTotal] = useState(() => {
    const storedBudget = localStorage.getItem("budgetTotal");
    return storedBudget ? parseFloat(storedBudget) : 200;
  });

  const [expenseTotal, setExpenseTotal] = useState(0);
  const [balance, setBalance] = useState(0);

  const [expenseList, setExpenseList] = useState(() => {
    const storedExpenseList = localStorage.getItem("expenseList");
    return storedExpenseList
      ? JSON.parse(storedExpenseList)
      : [{ name: "gas", amount: 40, isEditing: false }];
  });

  useEffect(() => {
    // Save budgetTotal and expenseList to local storage whenever they change
    localStorage.setItem("budgetTotal", budgetTotal);
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [budgetTotal, expenseList]);

  console.log(expenseList);

  const handleUpdateExpense = (updatedExpenses) => {
    setExpenseList(updatedExpenses);
  };

  const handleAddExpense = (name, amount) => {
    const newExpense = {
      name,
      amount: parseFloat(amount),
      isEditing: false,
    };
    setExpenseList((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleSetExpenseTotal = (newSetExpenseTotal) => {
    setExpenseTotal(newSetExpenseTotal);
  };

  const handleSetBalance = (newSetBalance) => {
    setBalance(newSetBalance);
  };

  const handleSetBudget = (newBudgetTotal) => {
    setBudgetTotal(newBudgetTotal);
  };

  return (
    <div className="h-screen flex flex-col align-middle mt-8">
      <div className="flex flex-col w-full gap-16 md:flex-row">
        <BudgetCard setBudgetTotal={handleSetBudget} />
        <ExpenseCard onAddExpense={handleAddExpense} />
      </div>
      <Overview budgetTotal={budgetTotal} expenseList={expenseList} />
      <ExpenseList expenseList={expenseList} onUpdate={handleUpdateExpense} />
    </div>
  );
}

export default App;
