import { useState } from 'react'

const ConditonalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState('kátia')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>If ternario</h1>
      {name === 'João' ? (
        <div>
          <p>O nome é João.</p>
        </div>
      ) : (
        <div>
          <p>O nome foi encontrado!</p>
        </div>
      )}
      <button onClick={() => setName('João')}>clique aqui</button>
    </div>
  )
}

export default ConditonalRender
