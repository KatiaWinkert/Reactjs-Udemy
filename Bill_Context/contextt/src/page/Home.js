//import { useContext } from 'react'
import ChangeCounter from '../Components/ChangeCounter'

//import { CounterContext } from '../context/CounterContext'

// 4 - refatorando com hook 

import { useCounterContext } from '../hooks/useCounterContex'

// 5 - Context mais complexos 
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  //const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 5 context mais complexos 
  const {color, dispatch} = useTitleColorContext()

  // 6 Alterando contexto complexo 
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do Contador: {counter} </p>
      {/* 3 - alterando valor contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexo complexo  */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermenlho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home
