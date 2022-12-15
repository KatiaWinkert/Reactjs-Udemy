import './App.css'

// 1 - config react route
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

//components
import Navbar from './Components/Navbar'
import SearchForm from './Components/SearchForm'


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 aula sobre links com react router */}
        <Navbar />
        {/* 9 - Search - rota de busta */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/*4 - rota dimanica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 7 - no match route - erro 404 pag*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
