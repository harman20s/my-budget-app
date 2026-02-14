import { useState } from 'react';
import AddExpense from './AddExpense';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]); // Adds the new expense to our list
  };

  return (
    <div className="App">
      <h1>My College Budget Tracker</h1>
      <AddExpense onAddExpense={addExpense} />
      
      <h3>Transaction History</h3>
      <ul>
        {expenses.map((item) => (
          <li key={item.id}>
            {item.description}: ₹{item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
