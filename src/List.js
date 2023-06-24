import { Item } from './Item';

export function List({ children, items, onDeleteItems, onToggleChecked }) {
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
