import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cotizador from './components/Cotizador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Cotizador Uniremington</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Cotizador />
    </>
  )
}

export default App
