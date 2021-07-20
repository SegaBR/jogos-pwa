import React from 'react';
import { Link } from 'react-router-dom'


const Tabela = ({ listaObjetos, remover }) => {

    return (
        <div>
            <h1>Meus Jogos</h1>
            <Link className="btn btn-primary" to="/cadastrarjogo">
                Novo <i className="bi bi-file-earmark-plus"></i>
            </Link>
            {listaObjetos.length === 0 && <h1>Nenhum Jogo encontrado</h1>}
            {listaObjetos.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Produtora</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Categoria</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map(objeto => (
                            <tr key={objeto.id}>
                                <td>{objeto.id}</td>
                                <td>{objeto.titulo}</td>
                                <td>{objeto.produtora}</td>
                                <td>{objeto.ano}</td>
                                <td>{objeto.categoria}</td>
                                <td>
                                    <Link className="btn btn-info" 
                                    to={`/editarjogo/${objeto.id}`}>
                                        <i className="bi bi-pencil-square"></i>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" title="Remover"
                                        onClick={() => { remover(objeto); }}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Tabela;