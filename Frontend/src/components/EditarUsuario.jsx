import { Container, Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';


const EditarUsuario = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null); 

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const backendResponse = await axios.patch(`https://crud-nasa-api.onrender.com/nasa/usuarios/${id}`, {
      id: id,  
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      password: password,
    });
    backendResponse();

    formRef.current.reset();
    setId('');
    setNombre('');
    setApellido('');
    setCorreo(''); 
    setPassword(''); 
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
};

  return (
    <div className="EditarPassword">
        <Container className="mt-5" id='editar'>
            <h2 className="text-center">Cambia tus datos {id}</h2>
            <Form onSubmit= {handleSubmit}  ref={formRef} id='form'> 
            <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Correo:  </Form.Label>
            <Form.Control
            id='css'
            type="text" 
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            />
            <br></br>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña nueva:  </Form.Label>
            <Form.Control
            id='css' 
            type="text"
            placeholder="Ingrese su nueva contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button type= "submit" className="btn btn-secondary">
            Cambiar Contraseña
            </Button>
            <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre nuevo:  </Form.Label>
            <Form.Control
            id='css' 
            type="text"
            placeholder="Ingrese su nuevo Nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            </Form.Group>
            <Button type= "submit" className="btn btn-secondary">
            Cambiar Nombre
            </Button>
            <Form.Group className="mb-3" controlId={apellido}>
            <Form.Label>Apellido nuevo:  </Form.Label>
            <Form.Control
            id='css' 
            type="text"
            placeholder="Ingrese su nuevo Apellido" 
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            />
            </Form.Group>
            <button onClick={setApellido} className="btn btn-secondary">
            Cambiar Apellido
            </button>
            </Form>
        </Container>
    </div>

  );
}

export default EditarUsuario;