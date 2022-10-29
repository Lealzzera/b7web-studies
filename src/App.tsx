import { useContagem } from "./reducers/contagem"

const App = () => {
  const [stateContagem, dispatchContagem] = useContagem()

  const adicionar = () => {
    return dispatchContagem({ typeAction: 'ADD' });
  };

  const remover = () => {
    return dispatchContagem({ typeAction: 'DEL' });
  };

  const resetar = () => {
    return dispatchContagem({ typeAction: 'RESET' });
  };

  return (
    <div className="p-3">
      <h1>Contagem: {stateContagem.count}</h1>
      <hr />
      <button onClick={adicionar} className="p-5">Adicionar</button>
      <button onClick={remover} className="p-5">Remover</button>
      <button onClick={resetar} className="p-5">Resetar</button>
    </div>

  )
}

export default App