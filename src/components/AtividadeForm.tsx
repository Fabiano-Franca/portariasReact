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
    atualizarAtividade: (e: any) => void;
    cancelarAtividade: () => void;
}
/*
const atividadeInicial = {
    id: 0,
    prioridade: 0,
    titulo: '',
    descricao: ''
}
*/

const atividadeInicial = {
    id: 0,
    prioridade: 0,
    titulo: '',
    descricao: ''
}

export default function AtividadeForm({ atividadeSelecionada, addAtividade, atualizarAtividade, cancelarAtividade }: AtividadeFormProps) {

    const [atividade, setAtividade] = useState<Atividade>(atividadeAtual);

    useEffect(() => {
        if (atividadeSelecionada.id !== 0)
            setAtividade(atividadeSelecionada);
    }, [atividadeSelecionada]);

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

<<<<<<< HEAD
    /*
        function atividadeAtual() {
            if (atividadeSelecionada.id !== 0) {
                return atividadeSelecionada;
            } else {
                return atividadeInicial;
            }
        }
    */
=======
    function handleSubmit(e: any) {
        e.preventDefault();

        if (atividadeSelecionada.id !== 0)
            atualizarAtividade(atividade);
        else
            addAtividade(atividade);

        setAtividade(atividadeInicial);
    }

    function handleCancelar(e: any) {
        e.preventDefault();
        cancelarAtividade();
        setAtividade(atividadeInicial);
    }


    function atividadeAtual() {
        if (atividadeSelecionada.id !== 0) {
            return atividadeSelecionada;
        } else {
            return atividadeInicial;
        }
    }

>>>>>>> 03fee483bc2dc022271cd6a8d44cd7634c73323c
    return (
        <>
            <h3>Atividade {atividade.id !== 0 ? atividade.id : ''}</h3>
            <form className='row g-3' onSubmit={handleSubmit}>

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
                    <hr />
                </div>


                <div className='col-12 mt-0'>
                    {atividade.id === 0 ? (
                        <button
                            className='btn btn-outline-secondary'
                            type='submit'
                        >
                            <i className="fas fa-plus me-2"></i>
                            Atividade
                        </button>
                    ) : (
                        <>
                            <button
                                className='btn btn-outline-success me-2'
                                type='submit'
                            >
                                <i className="fas fa-plus me-2"></i>
                                Salvar
                            </button>

                            <button
                                className='btn btn-outline-warning'
                                onClick={handleCancelar}
                            >
                                <i className="fas fa-plus me-2"></i>
                                Cancelar
                            </button>

                        </>
                    )}
                </div>

            </form>
        </>
    )
}
