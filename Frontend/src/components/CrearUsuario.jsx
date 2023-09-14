import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function CrearUsuario(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navegar = useNavigate()

    function crearUsuario(){
        const newUser = {
            nombre:nombre,
            apellido:apellido,
            correo:correo,
            password:password
        }
        axios.post('https://crud-nasa-api.vercel.app/nasa/usuarios', newUser)
        .then(res => console.log(res.data))
        .then(err => console.log(err))
        alert('Usuario agregado a la Base de Datos')
        navegar(0)
    }

    return(
        <div className="container" id="agregar">
            <h1>Crea tu Usuario</h1>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label" type="search" placeholder="Ingrese su nombre"> Nombre </label>
                <input type="text" className="form-control" id="formGroupExampleInput" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label"> Apellido </label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label"> Correo </label>
                <input type="text" className="form-control" id="formGroupExampleInput3" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label"> Su Password </label>
                <input type="text" className="form-control" id="formGroupExampleInput4" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div> 

            <button onClick={crearUsuario} className="btn btn-success">Crear Usuario</button>
        </div>
    )
}

export default CrearUsuario;