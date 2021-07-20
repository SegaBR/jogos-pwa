import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Cadastrar extends Component {

    state = {
        objeto: {
            id: this.props.objeto.id,
            titulo: this.props.objeto.titulo,
            produtora: this.props.objeto.produtora,
            ano: this.props.objeto.ano,
            categoria: this.props.objeto.categoria
        },
        redirecionar: false
    }

    acaoCadastrar = e => {
        e.preventDefault();
        if (this.props.editar) {
            this.props.editar(this.state.objeto);
        } else {
            this.props.inserir(this.state.objeto);
        }
        this.setState({ redirecionar: true });
    }

    render() {
        if (this.state.redirecionar === true) {
            return <Redirect to="/jogos" />
        }

        return (
            <div style={{ padding: '20px' }}>
                <h2>Edição de Jogo</h2>
                <form id="formulario" onSubmit={this.acaoCadastrar}>
                    <div className="form-group">
                        <label for="txtId">ID</label>
                        <input type="number" className="form-control" id="txtId"                            
                            defaultValue={this.props.objeto.id}
                            value={this.state.objeto.id}
                            readOnly/>
                    </div>
                    <div className="form-group">
                        <label for="txtTitulo">Título</label>
                        <input type="text" className="form-control" id="txtTitulo"
                            placeholder="Informe o título" 
                            defaultValue={this.props.objeto.titulo}
                            value={this.state.objeto.titulo}
                            required
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, titulo : e.target.value}}
                                )
                            }/>
                    </div>   
                    <div className="form-group">
                        <label for="txtProdutora">Produtora</label>
                        <input type="text" className="form-control" id="txtProdutora"
                            placeholder="Informe a produtora" 
                            required
                            defaultValue={this.props.objeto.produtora}
                            value={this.state.objeto.produtora}
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, produtora : e.target.value}}
                                )
                            }/>
                    </div>  
                    <div className="form-group">
                        <label for="txtAno">Ano</label>
                        <input type="number" className="form-control" id="txtAno"
                            placeholder="Informe o ano"
                            required 
                            defaultValue={this.props.objeto.ano}
                            value={this.state.objeto.ano}
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, ano : e.target.value}}
                                )
                            }/>
                    </div>   
                    <div className="form-group">
                        <label for="txtCategoria">Categoria</label>
                        <input type="text" className="form-control" id="txtCategoria"
                            placeholder="Informe a categoria" 
                            defaultValue={this.props.objeto.categoria}
                            value={this.state.objeto.categoria}
                            required
                            onChange={
                                e => this.setState(
                                    {objeto: {...this.state.objeto, categoria : e.target.value}}
                                )
                            }/>
                    </div> 
                    <button type="submit" className="btn btn-success">
                            Salvar <i className="bi bi-save"></i>
                    </button>                                                       
                </form>
            </div>
        );
    }

}

export default Cadastrar;
