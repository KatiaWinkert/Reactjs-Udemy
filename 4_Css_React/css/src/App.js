import './App.css'
import Mycomponent from './components/Mycomponent'
import { useState } from 'react'
function App() {
  const n = 15
  const [name] = useState('katia')
  const redtitle = false
  return (
    <div className="App">
      {/*Css Global*/}
      <h1>React com css</h1>
      {/*Css de componente */}
      <Mycomponent />
      <p>Este paragrafo é do App.js</p>
      {/*Inline Css*/}
      <p style={{ color: 'red', padding: '25px', borderTop: '2px solid blue' }}>
        Este elemento foi estilisado em forma inline
      </p>
      {/*Css inline dinamico*/}
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>
        Css dinamico
      </h2>
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>
        Css dinamico
      </h2>
      <h2
        style={
          name === 'katia' ? { color: 'green', backgroundColor: '#000' } : null
        }
      >
        Tetse Nome
      </h2>
      {/*Classe Dinamica*/}
      <h2 className={redtitle ? 'red-title' : 'title'}>
        Este titulo vai ter classe dinamica
      </h2>
    </div>
  )
}

export default App
