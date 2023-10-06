import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Read(){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8022/api/animales`)
        .then((response)=>{
            console.log(response.data.animal);
            setAPIData(response.data.animal);
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
        axios.get(`http://localhost:8022/api/animales`)
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const onDelete = (_id) =>{
        console.log(_id);
        axios.delete(`http://localhost:8022/api/animales/${_id}`)
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
                        <Table.HeaderCell>Especie</Table.HeaderCell>
                        <Table.HeaderCell>Raza</Table.HeaderCell>
                        <Table.HeaderCell>Edad</Table.HeaderCell>
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
                                    <Table.Cell>{data.especie}</Table.Cell>
                                    <Table.Cell>{data.raza}</Table.Cell>
                                    <Table.Cell>{data.edad}</Table.Cell>
                                    <Link to='/update'>
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