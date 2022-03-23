import React from 'react'

//Note que dessa vez não temos o [] no final do objeto atividade, porque não é passado um array
interface AtividadeProps {
  atividade: {
    id: number,
    prioridade: number,
    titulo: string,
    descricao: string
  };
  deletarAtividade: (id: number) => void;
  pegarAtividadeEdit: (id: number) => void;
}

export default function Atividade({ atividade, deletarAtividade, pegarAtividadeEdit }: AtividadeProps) {

  function prioridadeLabel(param: number) {
    switch (param) {
      case 1:
        return 'baixa';

      case 2:
        return 'normal';

      case 3:
        return 'alta';

      default:
        return 'Não definido';
    }
  }

  function prioridadeStyle(param: number, icone: boolean) {
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
    <div className={'card mb-2 shadow-sm border-' + prioridadeStyle(atividade.prioridade, false)}>
      <div className='card-body'>
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">
              {atividade.id}
            </span>
            {atividade.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={'ms-1 text-' + prioridadeStyle(atividade.prioridade, false)}>
              <i className={"me-1 fa-regular fa-face-" + prioridadeStyle(atividade.prioridade, true)} />
              {prioridadeLabel(atividade.prioridade)}
            </span>
          </h6>
        </div>
        <p className='card-text'>
          {atividade.descricao}
        </p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => pegarAtividadeEdit(atividade.id)}
          >
            <i className="fas fa-pen me-2" />
            Editar
          </button>
          <button
            className='btn btn-sm btn-outline-danger'
            onClick={() => deletarAtividade(atividade.id)}
          >
            <i className="fas fa-trash me-2" />
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
