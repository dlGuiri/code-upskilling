import Header from "./components/Header.jsx"
import Main from "./components/MainContent.jsx"
import Joke from "./components/Joke.jsx"
import "./App.css"

export default function App() {
  return(
    <>
      <Header />
      <Main />
      <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it."/>
      <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
      <Joke punchline="Scurvy."/>
      <Joke setup="Why do bees stay in the hive in the winter?" punchline="Swarm."/>
    </>
  )
}

