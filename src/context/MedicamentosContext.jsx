/**
 * PASSOS PARA CRIAR UM CONTEXTO
 * 1 - [x] - importe o createContext do react
 * 2 - [x] - criar a variável do context
 *    obs: por padrão o contexto recebe o mesmo nome do arquivo
 *    obs2: lembre-se de exportar a variável do context
 * 3 - [x] - defina o provider
 *    3.1 - [x] - defina os dados globais
 *    3.2 - [x] - defina o value do provider
 *      obs: geralmente o value vai ser um objeto
 *      obs2: lembre-se de exportar a variável do Provider
 *    3.3 - [x] - defina o children
 */

import { createContext, useState } from "react";

export const MedicamentosContext = createContext()

export const MedicamentosContextProvider = ({children}) => {

  const [listaMedicamentos, setListaMedicamentos] = useState([])

  const AdicionarMedicamento = (nome, laboratorio, preco) => {
    if(nome.length == "" || laboratorio.length == "" || preco == 0 || preco == ""){
      alert("Preencha todas as informações!")
      return
    }

    const novoMedicamento = {
      id: listaMedicamentos.length + 1,
      nome: nome,
      laboratorio: laboratorio,
      preco: preco,
      favorito: false
    }

    const novaLista = [...listaMedicamentos, novoMedicamento]
    console.log(novaLista)
    // novaLista.push(novoMedicamento)
    setListaMedicamentos(novaLista)
    alert("Medicamento cadastrado com sucesso!")
  }

  const FavoritarMedicamento = (id) => {

  }

  return (
    <MedicamentosContext.Provider 
    value={{listaMedicamentos, AdicionarMedicamento, FavoritarMedicamento}}>
      {children}
    </MedicamentosContext.Provider>
  )
}

