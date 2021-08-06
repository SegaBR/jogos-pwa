import { Component } from "react";

import Tabela from './Tabela';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cadastrar from './Cadastrar'

class Jogo extends Component {

    render() {
        // console.log("Listando objetos:");
        // console.log(this.props.listaObjetos);
        return (

            <Router>
                <Switch>
                    <Route exact path="/jogos"
                        render={
                            () => <Tabela listaObjetos={this.props.listaObjetos}
                                remover={this.props.remover} />
                        } />
                    <Route exact path="/cadastrarjogo" render={() =>
                        <Cadastrar inserir={this.props.inserir}
                            objeto={{ id: 0, titulo: "", produtora: "", ano: "", categoria:"" }} />
                    } />
                    <Route exact path="/editarjogo/:id" render={props => {
                        console.log("ID recibido: " + props.match.params.id);
                        const objeto = this.props.listaObjetos.find(
                            objeto => objeto.id === Number(props.match.params.id)
                        );
                        if (objeto) {
                            return (
                                <Cadastrar editar={this.props.editar} objeto={objeto} />
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