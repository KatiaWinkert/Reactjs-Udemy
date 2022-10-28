const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e)
  }

  return (
    <div>
      <div>
        <button onclick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onclick={()=> console.log('Clicou!')}>Clique Aqui! 
        </button>
      </div>
      <div>
        <button onclick={() => {
            if (true){
                console.log("isso não deveria existir =)")
            }
        }}>Clica aqui por favor!</button>
      </div>
    </div>
  )
}

export default Events
