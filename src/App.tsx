import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

type AtividadeT = {
  id: number,
  prioridade: number,
  titulo: string,
  descricao: string
}

const initialState = [
  {
    id: 1,
    prioridade: 3,
    titulo: 'Verificar SCAE',
    descricao: `Mandar e-mail para o DN questionando sobre a 
    tratativa dos problemas descrito em e-mails anteriores.`
  },
  {
    id: 2,
    prioridade: 1,
    titulo: 'Concluir os chamados pendentes',
    descricao: `Verificar se os chamados com o status 
    "Aguardando retorno" já foram respondidos para prosseguir 
    com o atenndimento e concluir o chamado.`
  },
];

const atv = {
  id: 1,
  prioridade: 1,
  titulo: '',
  descricao: ''
}

function App() {

  const [atividades, setAtividades] = useState<AtividadeT[]>(initialState);
  const [atividade, setAtividade] = useState<AtividadeT>(atv);

  function addAtividade(e: any) {
    e.preventDefault();

    const atividade = {
      id: Math.max.apply(
        Math,
        atividades.map((item) => item.id)
      ) + 1,
      prioridade: Number((document.getElementById('prioridade') as HTMLInputElement).value),
      titulo: (document.getElementById('titulo') as HTMLInputElement).value,
      descricao: (document.getElementById('descricao') as HTMLInputElement).value
    };

    setAtividades([...atividades, { ...atividade }]);

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
        atividadeSelecionada={atividade}
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
