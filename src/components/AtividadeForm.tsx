import { useEffect, useState } from 'react'

type Atividade = {
    id: number,
    prioridade: number,
    titulo: string,
    descricao: string
}

interface AtividadeFormProps {
    //Array de atividades
    atividades: {
        id: number,
        prioridade: number,
        titulo: string,
        descricao: string
    }[];
    //Atividade
    atividadeSelecionada: {
        id: number,
        prioridade: number,
        titulo: string,
        descricao: string
    };
    //Método sem retorno que recebe um parâmetro
    addAtividade: (e: any) => void;
}

export default function AtividadeForm({ atividades, atividadeSelecionada, addAtividade }: AtividadeFormProps) {

    const [atividade, setAtividade] = useState<Atividade>(atividadeSelecionada);

    useEffect(() => {
        console.log('Executou o hook useEffect');
    }, [atividade]);

    function inputTextHandler(e: any) {
        let { name, value } = e.target;

        switch (name) {
            case 'id':
            case 'prioridade':
                value = Number(value);
                break;
        }

        setAtividade({ ...atividade, [name]: value });
    }

    return (
        <form className='row g-3'>

            <div className='col-md-6'>
                <label htmlFor="titulo" className='form-label'>Título: </label>
                <input id='titulo'
                    type='text'
                    className='form-control'
                    placeholder='Título'
                    name='titulo'
                    value={atividade.titulo}
                    onChange={inputTextHandler}
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">Prioridade</label>
                <select
                    id="prioridade"
                    className="form-select"
                    name='prioridade'
                    value={atividade.prioridade}
                    onChange={inputTextHandler}
                >
                    <option defaultValue="0">Selecionar ... </option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>

            <div className='col-md-12'>
                <label htmlFor="descricao" className='form-label'>Desrição: </label>
                <textarea id='descricao'
                    className='form-control'
                    placeholder='Descricao'
                    name='descricao'
                    value={atividade.descricao}
                    onChange={inputTextHandler}
                />
            </div>

            <hr />

            <div className='col-12'>
                <button className='btn btn-outline-secondary' onClick={addAtividade}>+ atividade</button>
            </div>

        </form>
    )
}
