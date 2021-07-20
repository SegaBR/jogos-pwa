import { Component } from "react";

import Tabela from './Tabela';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cadastrar from './Cadastrar'
import SimpleStorage from "react-simple-storage"

class Jogo extends Component {

    state = {
        listaObjetos: []
        //[{ id: 1, titulo: "Forza Horizon 4", produtora: "Playground Games e Turn 10 Studios", ano: 2018 },
        //{ id: 2, titulo: "Call od Duty: Black Ops III", produtora: "Treyarch", ano: 2015 }]
        , sequenciacodigo: 0
    }

    remover = objeto => {
        if (window.confirm("Remover este jogo?")) {
            const listaObjetos = this.state.listaObjetos.filter(p => p.id !== objeto.id);
            this.setState({ listaObjetos });
        }
    }

    inserir = objeto => {
        var novoId = this.state.sequenciacodigo + 1;
        objeto.id = novoId;
        this.setState({ sequenciacodigo: novoId });
        this.setState({
            listaObjetos: [...this.state.listaObjetos, objeto]
        })
    }

    editar = objeto => {
        // encontrar o indice do objeto a ser editado
        const index = this.state.listaObjetos.findIndex(p => p.id === objeto.id);
        // remover o objeto da lista para receber o objeto editado
        const listaObjetos = this.state.listaObjetos.splice(0, index)
            .concat(this.state.listaObjetos.splice(index + 1));
        // adicionamos o elemento na lista nova
        const newListaObjetos = [...listaObjetos, objeto].sort((a, b) => a.id - b.id);
        this.setState({
            listaObjetos: newListaObjetos
        });
    }

    render() {
        return (

            <Router>
                <SimpleStorage parent={this}/>
                <Switch>
                    <Route exact path="/jogos"
                        render={
                            () => <Tabela listaObjetos={this.state.listaObjetos}
                                remover={this.remover} />
                        } />
                    <Route exact path="/cadastrarjogo" render={() =>
                        <Cadastrar inserir={this.inserir}
                            objeto={{ id: 0, titulo: "", produtora: "", ano: "" }} />
                    } />
                    <Route exact path="/editarjogo/:id" render={props => {
                        console.log("ID recibido: " + props.match.params.id);
                        const objeto = this.state.listaObjetos.find(
                            objeto => objeto.id === Number(props.match.params.id)
                        );
                        if (objeto) {
                            return (
                                <Cadastrar editar={this.editar} objeto={objeto} />
                            )
                        } else {
                            return <Redirect to="/jogos"/>
                        }
                    }
                    } />
                </Switch>
            </Router>
        );
    }

}

export default Jogo;