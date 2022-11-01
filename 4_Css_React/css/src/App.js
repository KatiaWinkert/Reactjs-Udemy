import './App.css';
import Mycomponent from './components/Mycomponent';

function App() {
  return (
    <div className="App">
      {/*Css Global*/}
     <h1>React com css</h1>
     {/*Css de componente */}
     <Mycomponent/>
     <p>Este paragrafo é do App.js</p>
    </div>
  );
}

export default App;
