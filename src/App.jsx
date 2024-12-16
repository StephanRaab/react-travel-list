import './index.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
    return(
        <>
            <Header/>
            <Form/>
            <PackingList/>
            <Stats/>
        </>
        )
}

function Header() {
  return (
      <header>
        <h1>🏖️ Travel List 🌴</h1>
      </header>
  )
}

function Form() {
    return (
        <div className={'add-form'}>
            <h3>What do you need to pack 👜 for your trip?</h3>
        </div>
    )
}

function PackingList() {
    return (
        <div className={'list'}>
            <ul>
                {initialItems.map((item) => (
                    <Item item={item}/>
                ))}
            </ul>
        </div>
    )
}

function Item({item}) {
    return <li key={item.id}><span>{item.quantity} {item.description}</span></li>
}

function Stats() {
    return (
        <footer className={'stats'}><em>X items left to pack, already X% done! ✈️</em></footer>
    )
}
