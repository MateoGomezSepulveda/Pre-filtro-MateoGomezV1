import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Button, Form} from 'semantic-ui-react';
import { useHistory } from 'react-router';

export default function Create(){
    let history = useHistory();
    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [contacto, setContacto] = useState('');

    const postAPIData = ()=>{
        axios.post(`http://localhost:8022/api/veterinarios`,{
            nombre,
            especialidad,
            contacto
        }
        ).then(()=>{
            history.push('/')
        })
    }
    return(
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>especialidad</label>
                    <input placeholder='Especialidad' value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>especialidad</label>
                    <input placeholder='Contacto' value={contacto} onChange={(e) => setContacto(e.target.value)}></input>
                </Form.Field>
                <Button type="submit" onClick={postAPIData}>Crear</Button>
            </Form>
        </div>
    )
}