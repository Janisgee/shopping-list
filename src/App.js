import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className='app'>
      <div className='container'>
        <Heading onAddItems={handleAddItems} />
        <ThreeLists items={items} onDeleteItems={handleDeleteItems} />
        <Control />
        <Footer />
      </div>
    </div>
  );
}

function Heading({ onAddItems }) {
  const [inputItem, setInputItem] = useState('');
  const [description, setDescription] = useState('Groceries');
  function handleSubmit(e) {
    e.preventDefault();

    if (!inputItem) return;

    const newItem = {
      name: inputItem,
      description: description,
      packed: false,
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

function ThreeLists({ items, onDeleteItems }) {
  console.log(items);
  const groceriesList = items.filter(
    (item) => item.description === 'Groceries',
  );
  const householdList = items.filter(
    (item) => item.description === 'Household',
  );
  const otherList = items.filter((item) => item.description === 'Others');

  return (
    <div className='three-lists'>
      <List
        children='Groceries'
        items={groceriesList}
        onDeleteItems={onDeleteItems}
      />
      <List
        children='Household'
        items={householdList}
        onDeleteItems={onDeleteItems}
      />
      <List children='Others' items={otherList} onDeleteItems={onDeleteItems} />
    </div>
  );
}

function List({ children, items, onDeleteItems }) {
  return (
    <div className='list'>
      <h3>{children}</h3>

      <ul className='list-item'>
        {items &&
          items.map((item) => (
            <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
          ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems }) {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => {}} />
      <span>{item.name}</span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Control() {
  return (
    <div className='control'>
      <span className='sort'>
        <select>
          <option value='order'>Sort by input order</option>
          <option value='name'>Sort by name</option>
          <option value='packingStatus'>Sort by packed status</option>
        </select>
        <button>Clear checked List</button>
        <button>Clear All</button>
      </span>
    </div>
  );
}

function Footer() {
  return (
    <footer className='check-result'>
      🛒 You have 6 items on your list, and you have already checked ✅2 (33%)
    </footer>
  );
}
