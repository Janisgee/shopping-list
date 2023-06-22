

export default function App() {
  return (
    <div className="app">
      <div className="container">

      {/* header */}
    <header>
<h1>🍆🍠 Shopping List 🥕🥒</h1>
</header>

      {/* three-lists */}

<div className="three-lists">
      {/* ------list-one */}
  <div class="list"><h3>Groceries</h3>
  <form><input type='text' placeholder="Add New Item"></input><button>+</button>
  <div >
  <ul className='list-item'>
  <li>
    <input type='checkbox'/>
    <span>apple</span>
    <button>❌</button>  
  </li>

  </ul>
  </div>
  </form>
  </div>
      {/* ------list-two */}
  <div class="list"><h3>Household</h3><form><input type='text' placeholder="Add New Item"></input><button>+</button>

  <div >
  <ul className='list-item'>
  <li>
    <input type='checkbox'/>
    <span>apple</span>
    <button>❌</button>
  </li>
  </ul>
  </div>
  </form></div>
      {/* ------list-three */}
  <div class="list"><h3>Others</h3><form><input type='text' placeholder="Add New Item"></input><button>+</button>
<div >
  <ul className='list-item'>
  <li>
    <input type='checkbox'/>
    <span>apple</span>
    <button>❌</button>
    </li>
  </ul>
  </div>
  </form></div></div>

      {/* Control-button */}

  <div className="control">
  <span className='sort'>
  <select><option>Sort by input order</option>
  <option>Sort by description</option>
  <option>Sort by packed status</option></select>
  <button>Clear checked List</button>
  <button>Clear All</button></span>
</div>
  
      {/* Footer */}
  <footer className='check-result'>🛒 You have 6 items on your list, and you have already checked ✅2 (33%)</footer>
    </div></div>
  );
}


