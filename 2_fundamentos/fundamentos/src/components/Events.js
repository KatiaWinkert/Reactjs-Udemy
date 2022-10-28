const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e)
    console.log('Ativou o evento!')
  }
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>
    } else {
      return <h1>Também posso renderizar isso!</h1>
    }
  }
  
  return (
    <div>
      <div>
        <button onclick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onclick={() => console.log('Clicou!')}>Clique Aqui!</button>
      </div>
      <div>
        <button
          onclick={() => {
            if (true) {
              console.log('isso não deveria existir =)')
            }
          }}
        >
          Clica aqui por favor!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
