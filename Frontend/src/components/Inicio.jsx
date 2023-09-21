import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';


const Inicio = () => {
  const [logeado, setlogin] = useState(false)
  const [usuario, setUsuario] = useState({})

  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    if(!usuario){
      return
    }else{
      setUsuario(usuarios)
      setlogin(usuarios)
    }
  }

  useEffect(()=>{
    login()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  const logout=()=>{
    localStorage.clear('Usuario')
    window.location.href='/'
  }



  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Password </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {/* <Button variant="primary" type="submit">
        Enviar
      </Button> */}
     {
        logeado? 
            <div className="dropdown ms-md-1">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {usuario?.user.nombre} Ingresar
                </button>
                <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
                    <li><a className='dropdown-item' href="/crear">Crear Usuario</a></li>
                    <li><button className='dropdown-item' onClick={logout}>Cerrar Sesión</button></li>
                </ul>
            </div>
            // <li className="nav-item d-flex align-items-center"><a className='a-usuario' href='/perfil'> {usuario?.user.nombre} </a></li> : 
            :                  
            <div className="d-flex">
                <button link='/login' name="Iniciar Sesion"/> Ingresar
            </div>
            }
    </Form>
    
    
        <div>
            <p>Si no posee una cuenta, puede registrarse haciendo click <a href='/crear'>aquí</a></p>
            <p>Si quiere cambiar sus datos, puede hacerlo haciendo click <a href='/cambio'>aquí</a></p>
            <h2>Bienvenidos, acá podrás ver Fotos del día de la Nasa</h2>
            <p>Si quiere ver la foto de hoy, puede hacerlo haciendo click <a href='/nasa'>aquí</a></p>
        </div>
</div>
         
  );
}

export default Inicio;