import React from 'react';
import Atividade from './Atividade';

interface AtividadeListaProps {
  atividades: {
    id: number,
    prioridade: number,
    titulo: string,
    descricao: string
  }[];
  deletarAtividade: (id: number) => void;
  pegarAtividadeEdit: (id: number) => void;
}
//Teste

export default function AtividadeLista({ atividades, deletarAtividade, pegarAtividadeEdit }: AtividadeListaProps) {
  return (
    <div className="mt-3">
      {atividades.map(atv => (
        <Atividade key={atv.id}
          atividade={atv}
          deletarAtividade={deletarAtividade}
          pegarAtividadeEdit={pegarAtividadeEdit}
        />
      ))}
    </div>
  )
}
