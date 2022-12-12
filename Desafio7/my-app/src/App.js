import './App.css'

// 1 - config react route 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages 
import Home from './pages/Home'
import About from './pages/About'

//components 
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 aula sobre links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
