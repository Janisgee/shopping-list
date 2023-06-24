import { useState } from 'react';
import { List } from './List';

export function ThreeLists({
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
