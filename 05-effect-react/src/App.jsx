import './App.css'
import Count from './components/Count'
import EffectOnLoad from './components/EffectOnLoad'
import EffectUnmount from './components/EffectUnmount'

function App() {
  
  return (
    <div className="App">
      <EffectOnLoad name="Cristian" />
      <br />
      <EffectUnmount />
      <br />
      <Count />
    </div>
  )
}

export default App
