import './App.css'
import City from './assets/city.jpg'


//componentes//
import ManageData from './components/ManageData'
import ListeRender from './components/ListeRender'
import ConditonalRender from './components/ConditonalRender'
function App() {
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
      <ManageData/>
      <ListeRender/>
      <ConditonalRender/>
    </div>
  )
}

export default App
