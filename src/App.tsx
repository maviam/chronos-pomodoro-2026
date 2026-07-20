import { Heading } from './components/Heading'
import './styles'

export function App() {
  console.log("Olá, isto é um teste")
  return (
    <div className="App">
      <Heading />
      <h1>Olá, Mundo (do App)!</h1>
      <p>Este é um parágrafo de teste.</p>
    </div>
  )
}

