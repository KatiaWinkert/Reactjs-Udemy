import './App.css'
import City from './assets/city.jpg'

//componentes//
import ManageData from './components/ManageData'
import ListeRender from './components/ListeRender'
import ConditonalRender from './components/ConditonalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'
function App() {
  //const name = 'Katia'
  const [userName] = useState('Katia <3')

  const cars = [
    { id: 1, brand: 'BMW', color: 'Preto', newCar: true, km: 0 },
    { id: 2, brand: 'Honda', color: 'Cinza', newCar: false, km: 20.0 },
    { id: 3, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
  ]

  function showMassenger() {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    { id: 1, name: 'Vitoria', job: 'Estagiario', age: 17 },
    { id: 2, name: 'Nino', job: 'Contador', age: 48 },
    { id: 3, name: 'Carlos', job: 'Reporter', age: 25 },
    { id: 4, name: 'Fabiano', job: 'Programador', age: 21 },
  ]

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
      <UserDetails />
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
      {/* Loop em array de object*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*Fragment*/}
      <Fragment propFragment="teste" />
      {/*Children*/}
      <Container>
        <p>E esse é o conteúdo</p>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMassenger} />
      {/*State lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*Desafio*/}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  )
}

export default App
