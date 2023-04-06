import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import Services from "./components/services/Services"
import Cta from "./components/cta/Cta"
import Contact from "./components/contact/Contact"

export default function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Home/>
      <About/>
      <Menu/>
      <Services/>
      <Cta/>
      <Contact/>
    </div>
  )
}