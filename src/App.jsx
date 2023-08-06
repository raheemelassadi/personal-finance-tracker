import { useState } from "react";
import "./App.css";
import BudgetCard from "./components/BudgetCard";
import ExpenseCard from "./components/ExpenseCard";
import Overview from "./components/Overview";
import ExpenseList from "./components/ExpenseLIst";

function App() {
  const [budgetTotal, setBudgetTotal] = useState(200);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expenseList, setExpenseList] = useState([
    { name: "gas", amount: 40, isEditing: false },
  ]);

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
      <div className="flex gap-16">
        <BudgetCard setBudgetTotal={handleSetBudget} />
        <ExpenseCard onAddExpense={handleAddExpense} />{" "}
        {/* Pass handleAddExpense to ExpenseCard */}
      </div>
      <Overview
        budgetTotal={budgetTotal}
        expenseTotal={expenseTotal}
        expenseList={expenseList}
      />
      <ExpenseList expenseList={expenseList} onUpdate={handleUpdateExpense} />
    </div>
  );
}

export default App;
