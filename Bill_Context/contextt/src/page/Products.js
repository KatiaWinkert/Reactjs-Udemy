import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Products = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do Contador: {counter} </p>
    </div>
  )
}

export default Products
