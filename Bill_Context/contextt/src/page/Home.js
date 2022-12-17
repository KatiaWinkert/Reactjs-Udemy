//import { useContext } from 'react'
import ChangeCounter from '../Components/ChangeCounter'

//import { CounterContext } from '../context/CounterContext'

// 4 - refatorando com hook 

import { useCounterContext } from '../hooks/useCounterContex'

const Home = () => {
  //const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador: {counter} </p>
      {/* 3 - alterando valor contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home
