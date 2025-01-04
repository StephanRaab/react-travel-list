import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>🏖️ Travel List 🌴</h1>
    </header>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={"add-form"} onSubmit={handleSubmit}>
      <h3>What do you need to pack 👜 for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className={"list"}>
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className={"stats"}>
      <em>X items left to pack, already X% done! ✈️</em>
    </footer>
  );
}
