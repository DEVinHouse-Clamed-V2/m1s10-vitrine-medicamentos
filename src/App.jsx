import { useState } from 'react'
import './App.css'

import Header from "./components/Header"
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento"

function App() {

  return (
    <>
      <Header />
      <FormularioNovoMedicamento />
    </>
  )
}

export default App
