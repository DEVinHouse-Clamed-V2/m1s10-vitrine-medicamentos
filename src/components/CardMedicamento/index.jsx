import { useContext } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"

function CardMedicamento({medicamento}){

  const {FavoritarMedicamento} = useContext(MedicamentosContext)

  return (
    <div>
      <button onClick={() => FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>
      <img width={150} src="https://img.freepik.com/vetores-premium/frasco-de-medicamento-em-branco-com-caixa-realista_134452-15.jpg?w=2000" alt="Imagem do medicamento" />
      <h4>Medicamento: {medicamento.nome}</h4>
      <h4>Laboratório: {medicamento.laboratorio}</h4>
      <h4>Preço: {medicamento.preco}</h4>
    </div>
  )
}

export default CardMedicamento