
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Submissions from './components/Submissions.jsx'
import SignUpLogin from './components/SignUp.jsx'
import Archive from './components/Archive.jsx'
function App() {

  return (
  <>
      <BrowserRouter>

        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6 z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/archive" element={<Archive/>} />
          <Route path="/signup-login" element={<SignUpLogin />} />
        </Routes>
        <Footer />
        </div>
      
      </BrowserRouter>
  </>
  )
}

export default App
