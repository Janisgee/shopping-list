import { useState } from 'react';

export function Heading({ onAddItems }) {
  const [inputItem, setInputItem] = useState('');
  const [description, setDescription] = useState('Groceries');
  function handleSubmit(e) {
    e.preventDefault();

    if (!inputItem) return;

    const capitalizeItem = inputItem
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    console.log(capitalizeItem);

    const newItem = {
      name: capitalizeItem,
      description: description,
      checked: false,
      id: crypto.randomUUID(),
    };

    setInputItem('');
    onAddItems(newItem);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <header>
      <h1>🍆🍠 Shopping List 🥕🥒</h1>
      <form className='form' onSubmit={handleSubmit}>
        <select onChange={handleDescription}>
          <option value='Groceries'>Groceries</option>
          <option value='Household'>Household</option>
          <option value='Others'>Others</option>
        </select>
        <input
          type='text'
          placeholder='Add New Item'
          autoFocus
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button>+</button>
      </form>
    </header>
  );
}
