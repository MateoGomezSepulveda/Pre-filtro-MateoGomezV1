import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8022/api/refugios`)
      .then((response) => {
        console.log(response.data.refugios.id);
        setAPIData(response.data.refugios);
      })
  }, []);

  const setData = (data) => {
    const {id, nombre, direccion, contacto } = data;
    localStorage.setItem('Id', id);
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Direccion', direccion);
    localStorage.setItem('Contacto', contacto);
  };

  const getData = () => {
    axios.get(`http://localhost:8022/api/refugios`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  };


  const onDelete = (id) => {
    axios.delete(`http://localhost:8022/api/refugios/${id}`)
      .then(() => {
        getData();
      })
  };

  return (
    <div className="container">
      <Link to="/crear">
        <Button primary>Crear</Button>
      </Link>
      <Table className="Table" singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Dirección</Table.HeaderCell>
            <Table.HeaderCell>Contacto</Table.HeaderCell>
            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.nombre}</Table.Cell>
              <Table.Cell>{data.direccion}</Table.Cell>
              <Table.Cell>{data.contacto}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button secondary onClick={() => setData(data)}>
                    Actualizar
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button negative onClick={() => onDelete(data.id)}>
                  Eliminar
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
