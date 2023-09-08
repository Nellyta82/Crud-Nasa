import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function AgregarImagen(){
    const [fecha, setFecha] = useState('');
    const [url, setUrl] = useState('');
    const [titulo, setTitulo] = useState('');
    const [explicacion, setExplicacion] = useState('');
    const navegar = useNavigate()

    function agregarImagen(){
        const newImage = {
            fecha:fecha,
            url:url,
            titulo:titulo,
            explicacion:explicacion
        }
        axios.post('http://localhost:8080/nasa/', newImage)
        .then(res => console.log(res.data))
        .then(err => console.log(err))
        alert('Imagen agregada a la Base de Datos')
        navegar(0)
    }

    return(
        <div className="container" id="agregar">
            <h1>Crea tu imagen de la Nasa</h1>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Fecha de la Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput" value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Url de la Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value={url} onChange={(e)=>setUrl(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Título de la Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label">Explicación de la Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" value={explicacion} onChange={(e)=>setExplicacion(e.target.value)}/>
            </div> 

            <button onClick={agregarImagen} className="btn btn-success">Agregar Imagen</button>
        </div>
    )
}

export default AgregarImagen;