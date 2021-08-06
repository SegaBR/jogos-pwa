import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 

//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import EstadoJogo from './EstadoJogo'

function App() {
  return (
    <EstadoJogo />
  );
}

export default App;
