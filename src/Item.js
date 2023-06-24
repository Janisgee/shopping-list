export function Item({ item, onDeleteItems, onToggleChecked }) {
  return (
    <li>
      <input
        type='checkbox'
        readOnly
        checked={item.checked}
        onChange={() => onToggleChecked(item.id)}
      />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.name}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
