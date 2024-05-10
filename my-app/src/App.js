import logo from "./logo.svg"
import "./App.css"
import { NavBar } from "./components/navbar"
import { Header } from "./components/header"
import { Projects } from "./components/projects"
import { About } from "./components/about"
import { Contact } from "./components/contact"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
