import Header from "./components/Header.jsx"
import Main from "./components/MainContent.jsx"
import entryContent from "./data.js"
import "./App.css"

export default function App() {

  const entries = entryContent.map(entry => <Main key={entry.id} {...entry} />);

  return(
    <>
      <Header />
      {entries}
    </>
  )
}

