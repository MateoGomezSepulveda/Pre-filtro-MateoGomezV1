import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Read(){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8022/api/adoptantes`)
        .then((response)=>{
            console.log(response.data.adoptante);
            setAPIData(response.data.adoptante);
        })
    },[]);

    const setData = (data) =>{
        let {nombre,especie,raza,edad} = data;
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Especie', especie);
        localStorage.setItem('Raza', raza);
        localStorage.setItem('Edad', edad);
    }

    const getData = () =>{
        axios.get(`http://localhost:8022/api/adoptantes`)
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const onDelete = (_id) =>{
        console.log(_id);
        axios.delete(`http://localhost:8022/api/adoptantes`)
        .then(()=>{
            getData();
        })
    };

    return(
        <div className="div-container">
            <Link to='/crear'>
                <Table.Cell>
                    <Button>Crear</Button>
                </Table.Cell>
            </Link>
            <Table className="Table" singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Direccion</Table.HeaderCell>
                        <Table.HeaderCell>Contacto</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            <Table.Body>
                {
                        APIData.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.nombre}</Table.Cell>
                                    <Table.Cell>{data.direccion}</Table.Cell>
                                    <Table.Cell>{data.contacto}</Table.Cell>                                    <Link to='/update'>
                                        <Table.Cell>
                                            <Button onClick={() => setData(data)}>Actualizar</Button>
                                        </Table.Cell>
                                    </Link>
                                        <Table.Cell>
                                            <Button onClick={() => onDelete(data._id)}>Delete</Button>
                                        </Table.Cell>
                                </Table.Row>
                            )
                        })     
                }
            </Table.Body>
            </Table>
        </div>
    )
}