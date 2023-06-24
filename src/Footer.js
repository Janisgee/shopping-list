export function Footer({ items }) {
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
