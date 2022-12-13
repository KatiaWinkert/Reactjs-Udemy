import './App.css'

// 1 - config react route 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages 
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

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
          {/*4 - rota dimanica */}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
