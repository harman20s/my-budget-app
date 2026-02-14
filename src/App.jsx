import { useState, useEffect } from 'react'; // 1. Added useEffect here
import AddExpense from './AddExpense';

function App() {
  // 2. Initialize state by checking LocalStorage first
  const [expenses, setExpenses] = useState(() => {
    const savedData = localStorage.getItem('my_expenses');
    return savedData ? JSON.parse(savedData) : [];
  });

  // 3. This "Effect" runs every time 'expenses' changes, saving it automatically
  useEffect(() => {
    localStorage.setItem('my_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Budget Tracker</h1>
      <AddExpense onAddExpense={addExpense} />
      
      <h2>History (Saved)</h2>
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
