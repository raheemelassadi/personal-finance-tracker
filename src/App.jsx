import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetCard from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl font-bold p-8 text-center font-raleway">Expense Tracker</h1>
      <BudgetCard />
    </>
  )
}

export default App
