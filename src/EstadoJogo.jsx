import { Component } from "react";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './componentes/Home';
import Jogo from './componentes/jogo/Jogo'
import SimpleStorage from "react-simple-storage"

class EstadoJogo extends Component {

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
                <Menu />
                <SimpleStorage parent={this}/>
                <Switch>
                    <Route exact path="/" render={() => <Home listaObjetos={this.state.listaObjetos} />}  />
                    <Route exact path="/jogos" render={() => <Jogo listaObjetos={this.state.listaObjetos}  inserir={this.inserir} remover={this.remover} editar={this.editar}/>} />
                </Switch>
            </Router>
        );
    }

}

export default EstadoJogo;