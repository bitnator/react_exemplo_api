import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import Tabela from "./tabela";
require('es6-promise').polyfill();
require('isomorphic-fetch');

function App() {
    const [dados, setDados] = useState([]);
    const [p, setP] = useState("");
  
    useEffect(() => {
      fetch("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o")
        .then((response) => response.json())
        .then((json) => setDados(json));
  
    }, [])

    return (
    <Container className="p-3">
      <h1 className="header">Linhas de ônibus e lotações de Porto Alegre</h1>
      <Row>
        <Tabela data={dados} />
      </Row>
    </Container>
);
}

export default App;