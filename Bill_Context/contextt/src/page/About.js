//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from "../hooks/useCounterContex"
const About = () => {
  //const { counter } = useContext(CounterContext)
const {counter} = useCounterContext()
  return (
    <div>
      <h1>About</h1>
      <p>Valor do Contador: {counter} </p>
    </div>
  )
}

export default About
