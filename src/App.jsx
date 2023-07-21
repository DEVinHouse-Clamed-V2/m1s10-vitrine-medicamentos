import { useState } from 'react'
import './App.css'

import { MedicamentosContextProvider } from './context/MedicamentosContext'

import Header from "./components/Header"
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento"

function App() {

  return (
    <>
      <Header />
      <MedicamentosContextProvider>
        <FormularioNovoMedicamento />
      </MedicamentosContextProvider>
    </>
  )
}

export default App
