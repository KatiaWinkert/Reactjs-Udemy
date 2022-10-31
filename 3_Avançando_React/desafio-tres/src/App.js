import './App.css'
import City from './assets/city.jpg'

//componentes//
import ManageData from './components/ManageData'
import ListeRender from './components/ListeRender'
import ConditonalRender from './components/ConditonalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
function App() {
  const name = 'Katia'
  const [userName] = useState('Katia <3')

  return (
    <div className="App">
      <h1>Avançando React desafio 3</h1>
      {/*imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListeRender />
      <ConditonalRender />
      {/*Props*/}
      <ShowUserName name={userName} />
      {/*Destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/*reaproveitamento*/}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
    </div>
  )
}

export default App
