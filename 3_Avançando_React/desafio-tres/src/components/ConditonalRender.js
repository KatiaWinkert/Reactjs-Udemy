import { useState } from 'react'

const ConditonalRender = () => {
  const [x] = useState(false)

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
    </div>
  )
}

export default ConditonalRender
