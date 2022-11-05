import './App.css'
import CarDetalhe from './Components/CarDetalhe'

function App() {
  const cars = [
    { id: 1, brand: 'Toyota', color: 'Grey', km: 0, newCar: true },
    { id: 2, brand: 'Audi', color: 'Black', km: 14.805, newCar: false },
    { id: 3, brand: 'Ferrari', color: 'Red', km: 45.866, newCar: false },
    { id: 1, brand: 'Ford', color: 'White', km: 0, newCar: true },
  ]
  return (
    <div className="App">
      <h1>Challengecss</h1>
      {cars.map((car) => (
        <CarDetalhe key={car.id} 
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}/>
      ))}
    </div>
  )
}

export default App
