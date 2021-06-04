import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function Tabela({ data }) {
    return (
        <Table striped bordered hover>
        <thead>
        <tr>
        <th>ID</th>
        <th>Código</th>
        <th>Nome</th>
        <th>Itinerário</th>
        </tr>
        </thead>
        <tbody>
        {
            data.map(function (element) {
                return <tr>
                <td>{element.id}</td>
                <td>{element.codigo}</td>
                <td>{element.nome}</td>
                <td>
                    <Button href="https://www.google.com/maps" active="true" variant="primary" >Ver no mapa</Button>
                </td>
                </tr>;
            })
        }
        </tbody>
        </Table>
    )
}