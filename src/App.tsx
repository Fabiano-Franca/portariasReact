import { useState, useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

type AtividadeT = {
  id: number,
  prioridade: number,
  titulo: string,
  descricao: string
}

const atv = {
  id: 0,
  prioridade: 1,
  titulo: '',
  descricao: ''
}

function App() {

  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState<AtividadeT[]>([]);
  const [atividade, setAtividade] = useState<AtividadeT>(atv);

  useEffect(() => {
    atividades.length <= 0 ?
      setIndex(1) :
      setIndex(Math.max.apply(
        Math,
        atividades.map((item) => item.id)
      ) + 1
      )
  }, [atividades])

  function addAtividade(atv: AtividadeT) {
    setAtividades([...atividades, { ...atv, id: index }]);
  }

  function atualizarAtividade(atv: AtividadeT) {
    setAtividades(atividades.map(item => item.id === atv.id ? atv : item));
    setAtividade(atv);
  }

  function cancelarAtividade() {
    setAtividade(atv);
  }

  function deletarAtividade(id: number) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);

    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividadeEdit(id: number) {
    const atividadeSelectionada = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividadeSelectionada[0]);
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        atividadeSelecionada={atividade}
        cancelarAtividade={cancelarAtividade}
        atividades={atividades}
      />
      <AtividadeLista
        deletarAtividade={deletarAtividade}
        pegarAtividadeEdit={pegarAtividadeEdit}
        atividades={atividades}
      />
    </>
  );
}

export default App;
