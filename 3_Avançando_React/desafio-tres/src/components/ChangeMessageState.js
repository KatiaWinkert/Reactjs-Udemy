import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
  const messagens = ['oi', 'olá', 'oi', 'Tudo bem?']

  return (
    <div>
      <button onClick={() => handleMessage(messagens[0])}>1</button>
      <button onClick={() => handleMessage(messagens[1])}>1</button>
      <button onClick={() => handleMessage(messagens[2])}>1</button>
    </div>
  )
}

export default ChangeMessageState
