import { useContagem } from "./reducers/contagem";
const App = () => {
  const [contagemState, contagemDispatch] = useContagem();

  const adicionar = () => {
    return contagemDispatch({ typeAction: 'ADD' });
  };

  const remover = () => {
    return contagemDispatch({ typeAction: 'DEL' });
  };

  const resetar = () => {
    return contagemDispatch({ typeAction: 'RESET' });
  };

  return <div className='p-5'>Contagem: {contagemState.count}
    <hr />
    <button onClick={adicionar} className="p-5">Adicionar</button>
    <button onClick={remover} className="p-5">Remover</button>
    <button onClick={resetar} className="p-5">Resetar</button>
  </div>
}

export default App