import React, { useState } from 'react';
import './App.css';


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

function App() {

  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e: any) {
    e.preventDefault();

    const atividade = {
      id: Number((document.getElementById('id') as HTMLInputElement).value),
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

  function prioridadeLabel(param: Number) {
    switch (param) {
      case 1:
        return 'baixa';

      case 2:
        return 'normal';

      case 3:
        return 'alta';

      default:
        return 'Nãod definido';
    }
  }

  function prioridadeStyle(param: Number, icone: boolean) {
    switch (param) {
      case 1:
        return icone ? 'smile' : 'success';

      case 2:
        return icone ? 'meh' : 'dark';

      case 3:
        return icone ? 'frown' : 'warning';

      default:
        return 'Nãod definido';
    }
  }

  return (
    <>
      <form className='row g-3'>

        <div className='col-md-6'>
          <label htmlFor="id" className='form-label'>Id: </label>
          <input id='id'
            type='text'
            className='form-control'
            readOnly
            value={
              Math.max.apply(
                Math,
                atividades.map((item) => item.id)
              ) + 1
            }
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar ... </option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className='col-md-6'>
          <label htmlFor="titulo" className='form-label'>Título: </label>
          <input id='titulo' type='text' className='form-control' placeholder='Título' />
        </div>

        <div className='col-md-6'>
          <label htmlFor="descricao" className='form-label'>Desrição: </label>
          <input id='descricao' type='text' className='form-control' placeholder='Descricao' />
        </div>

        <hr />

        <div className='col-12'>
          <button className='btn btn-outline-secondary' onClick={addAtividade}>+ atividade</button>
        </div>

      </form>

      <div className="mt-3">

        {atividades.map(atv => (
          <div key={atv.id} className={'card mb-2 shadow-sm border-' + prioridadeStyle(atv.prioridade, false)}>
            <div className='card-body'>
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">
                    {atv.id}
                  </span>
                  {atv.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={'ms-1 text-' + prioridadeStyle(atv.prioridade, false)}>
                    <i className={"me-1 fa-regular fa-face-" + prioridadeStyle(atv.prioridade, true)} />
                    {prioridadeLabel(atv.prioridade)}
                  </span>
                </h6>
              </div>
              <p className='card-text'>
                {atv.descricao}
              </p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-sm btn-outline-primary me-2">
                  <i className="fas fa-pen me-2" />
                  Editar
                </button>
                <button
                  className='btn btn-sm btn-outline-danger'
                  onClick={() => deletarAtividade(atv.id)}
                >
                  <i className="fas fa-trash me-2" />
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}

export default App;
