import { useState, useEffect } from 'react';

export default function App() {
  const storeItems = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(storeItems);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  console.log(localStorage);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function handleClearList() {
    setItems([]);
  }

  function handleClearChecked() {
    setItems((items) => items.filter((item) => item.checked === false));
  }

  return (
    <div className='app'>
      <div className='container'>
        <Heading onAddItems={handleAddItems} />
        <ThreeLists
          items={items}
          onDeleteItems={handleDeleteItems}
          onToggleChecked={handleToggleChecked}
          onClearList={handleClearList}
          onClearChecked={handleClearChecked}
        />

        <Footer items={items} />
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

function ThreeLists({
  items,
  onDeleteItems,
  onToggleChecked,
  onClearList,
  onClearChecked,
}) {
  const [sortBy, setSortBy] = useState('order');

  let sortedLists;

  if (sortBy === 'order') sortedLists = items;
  if (sortBy === 'name')
    sortedLists = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === 'checkingStatus')
    sortedLists = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

  const groceriesList = sortedLists.filter(
    (item) => item.description === 'Groceries',
  );
  const householdList = sortedLists.filter(
    (item) => item.description === 'Household',
  );
  const otherList = sortedLists.filter((item) => item.description === 'Others');

  return (
    <>
      <div className='three-lists'>
        <List
          children='Groceries'
          items={groceriesList}
          onDeleteItems={onDeleteItems}
          onToggleChecked={onToggleChecked}
        />
        <List
          children='Household'
          items={householdList}
          onDeleteItems={onDeleteItems}
          onToggleChecked={onToggleChecked}
        />
        <List
          children='Others'
          items={otherList}
          onDeleteItems={onDeleteItems}
          onToggleChecked={onToggleChecked}
        />
      </div>
      <div className='control'>
        <span className='sort'>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option value='order'>Sort by input order</option>
            <option value='name'>Sort by name</option>
            <option value='checkingStatus'>Sort by checked status</option>
          </select>
          <button onClick={onClearChecked}>Clear checked List</button>
          <button onClick={onClearList}>Clear All</button>
        </span>
      </div>
    </>
  );
}

function List({ children, items, onDeleteItems, onToggleChecked }) {
  return (
    <div className='list'>
      <h3>{children}</h3>

      <ul className='list-item'>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleChecked={onToggleChecked}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleChecked }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.checked}
        onChange={() => onToggleChecked(item.id)}
      />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.name}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Footer({ items }) {
  const numItems = items.length;
  const numCheckedItems = items.filter((item) => item.checked === true).length;
  const percentage = Math.round((numCheckedItems / numItems) * 100);
  return (
    <footer className='check-result'>
      {percentage === 100
        ? '🛍️ You have bought all the items that you need ! 😊'
        : `🛒 You have  ${numItems}  items on your list , and you have already checked ✅
      ${numCheckedItems} (${percentage}%)`}
    </footer>
  );
}
