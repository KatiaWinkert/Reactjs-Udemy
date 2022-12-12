import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import './Home.css'

const Home = () => {
  // 3- carregamento de dados
  const url = '  http://localhost:3000/products'
  const { data: loading, items, error } = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{Error}</p>}
      <ul className="products"></ul>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
          </li>
        ))}
    </div>
  )
}

export default Home
