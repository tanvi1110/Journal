
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
  <>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
  </>
  )
}

export default App
