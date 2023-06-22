export default function App(){
return(
    <div className="app">
    <div className="container">
        <Heading/>
        <ThreeLists />
        <Control />
        <Footer />
    </div>
    </div>)}


function Heading (){
    return ( <header>
<h1>🍆🍠 Shopping List 🥕🥒</h1>
</header>)
}

function List({children}){
    return (<div class="list"><h3>{children}</h3>
  <form><input type='text' placeholder="Add New Item"></input><button>+</button>
  <div>
  <ul className='list-item'>
  <li>
    <input type='checkbox'/>
    <span>apple</span>
    <button>❌</button>  
  </li>
  </ul>
  </div>
  </form>
  </div>)
}


function ThreeLists(){
    return(<div className="three-lists">
        <List children='Groceries'/>
        <List children='Household'/>
        <List children='Others'/>
</div>)}


function Control(){
    return(<div className="control">
  <span className='sort'>
  <select><option>Sort by input order</option>
  <option>Sort by description</option>
  <option>Sort by packed status</option></select>
  <button>Clear checked List</button>
  <button>Clear All</button></span>
</div>)
}

function Footer(){
    return(  <footer className='check-result'>🛒 You have 6 items on your list, and you have already checked ✅2 (33%)</footer>)
}