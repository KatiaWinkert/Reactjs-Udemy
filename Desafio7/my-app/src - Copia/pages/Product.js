import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {
  // 4- rota dinamica
  const { id } = useParams()

  // 5 carregamento dado individual
  const url = 'http://localhost:3000/products/' + id

  const { data: product, loading, error } = useFetch(url)

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Erro ... </p>}
      {loading && <p>Carregando ... </p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          {/*6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  )
}

export default Product
