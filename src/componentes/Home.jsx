import React from 'react';

const Home = ({listaObjetos}) => (
    <div>
        <h1>Lista Jogos</h1>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
    </div>
);

export default Home;