import { useState } from 'react'
import logoUni from './assets/logo2_footer.png'
import './App.css'
import Cotizador from './components/Cotizador'

function App() {

  return (
    <>
      <div>
          <img src={logoUni} className="logo react" alt="React logo" />
      </div>
      <h1>Cotizador Uniremington</h1>
      <Cotizador />
    </>
  )
}

export default App
