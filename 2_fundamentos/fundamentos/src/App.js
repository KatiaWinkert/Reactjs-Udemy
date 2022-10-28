// Components //
import FristComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'


//styles css //
import './App.css'
import ChallEnge from './components/ChallEnge'


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FristComponent />
      <ChallEnge/>
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  )
}

export default App
