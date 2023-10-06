import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Read(){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8022/api/donaciones`)
        .then((response)=>{
            console.log(response.data.donacion);
            setAPIData(response.data.donacion);
        })
    },[]);

    const setData = (data) =>{
        let {fecha,monto} = data;
        localStorage.setItem('Fecha', fecha);
        localStorage.setItem('Monto', monto);
    }

    const getData = () =>{
        axios.get(`http://localhost:8022/api/donaciones`)
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const onDelete = (_id) =>{
        console.log(_id);
        axios.delete(`http://localhost:8022/api/donaciones/${(Object)._id}`)
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
                        <Table.HeaderCell>Fecha</Table.HeaderCell>
                        <Table.HeaderCell>Monto</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            <Table.Body>
                {
                    
                        APIData.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.fecha}</Table.Cell>
                                    <Table.Cell>{data.monto}</Table.Cell>
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