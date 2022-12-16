import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Products from './page/Products'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
