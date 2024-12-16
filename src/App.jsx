import './index.css'

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
        <div className={'list'}>List of items here...</div>
    )
}

function Stats() {
    return (
        <footer className={'stats'}><em>X items left to pack, already X% done! ✈️</em></footer>
    )
}
