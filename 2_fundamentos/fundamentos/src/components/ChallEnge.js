const ChallEnge = () => {
  const a = 20
  const b = 15
  return (
    <div>
      <p>
        {' '}
        A: {a} e b: {b}
      </p>
      <button onClick={() => console.log(a + b)}>
        clique para fazer a soma de A + B
      </button>
    </div>
  )
}

export default ChallEnge
