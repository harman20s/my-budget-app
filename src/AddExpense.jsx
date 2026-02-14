import { useState } from 'react';

function AddExpense({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    // Create a new expense object
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense); // Send data to the main App
    setDescription(''); // Clear the input
    setAmount('');      // Clear the input
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input 
        type="text" 
        placeholder="What did you buy?" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
