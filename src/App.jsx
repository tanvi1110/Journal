
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
  <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
