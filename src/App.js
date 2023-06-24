import { useState, useEffect } from 'react';
import { Heading } from './Heading';
import { ThreeLists } from './ThreeLists';
import { Footer } from './Footer';

export default function App() {
  const storeItems = JSON.parse(localStorage.getItem('items'));

  const [items, setItems] = useState(storeItems ? storeItems : []);
  console.log(storeItems);
  console.log(items);
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
