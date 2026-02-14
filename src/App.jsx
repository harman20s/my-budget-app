import { useState } from 'react';
import AddExpense from './AddExpense'; // This imports the file you just made

function App() {
  // This 'state' will hold your list of expenses
  const [expenses, setExpenses] = useState(() => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
});

// Add this "useEffect" right after your addExpense function
import { useEffect } from 'react';
// ... inside the App function ...
useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);


  // Function to add a new expense to the list
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Budget Tracker</h1>
      
      {/* 1. Show the Form */}
      <AddExpense onAddExpense={addExpense} />
      
      {/* 2. Show the History List */}
      <h3>Transaction History</h3>
      {expenses.length === 0 ? (
        <p>No transactions yet. Add one above!</p>
      ) : (
        <ul>
          {expenses.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <strong>{item.description}</strong>: ₹{item.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
