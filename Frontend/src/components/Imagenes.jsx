import React from "react";
import { useEffect, useState } from "react";
// import {  useNavigate } from "react-router-dom";
import axios from "axios";
import "../Card.css";
import AgregarImagen from "./AgregarImagen";
// import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
// import Tarjetas from "./Tarjetas";


function Imagenes() {

    const [ImagenDB, setImagenDB] = useState();


    const obtenerImagenDB = async () => {
        try {
          const response = await fetch('http://localhost:8080/nasa/ImagenDB');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          const ImagenDB = data.ImagenDB; 
          
          console.log('la imagen es:', ImagenDB);
          setImagenDB(ImagenDB);
        } catch (error) {
          console.error('Fetch Error:', error);
        }
      };
      

    useEffect(()=>{
        obtenerImagenDB()
    },[])



// function Imagenes(){
//     const[data, setData] = useState([{}]);
//     const navegar = useNavigate()
//     useEffect(() => {
//         // const obtenerImagen = async() => {
//             // const ImagenesDB = await 
//             axios.get("http://localhost:8080/nasa/ImagenDB").then(res => {
//             console.log(res);
//             setData(res.data.content);
//         }).catch(err => console.log(err))
//         // obtenerImagen();
//     },  []);

//     console.log(data);

//     if (!data) return(<div />);

// function Imagenes  ()  {
//     const backend = 'http://localhost:8080/nasa/ImagenDB' 
  
//     const [data, getdata] = useState([{}]);

//   useEffect(async() => {
//     const res = await fetch(backend);
//     const data= await res.json();
//     getdata(data);
//   }, [{}]); 

//    console.log(data);
//   if (!data) return(<div />);


// function Imagenes(){

//     const backend = 'http://localhost:8080/nasa/ImagenDB'
//     const [data, setData] = useState([{}]);
//     useEffect(async () => {  
//         const res = await fetch(backend);
//         const datas = await res.json();
//         setData(datas);
//       }, []);
    
//     if (!data) return(<div />);
//     console.log(data)

  
// function Imagenes(){

//     const backend = 'http://localhost:8080/nasa/ImagenDB'
//     const [ImagenesDB, setImagenesDB] = useState([]);
//     useEffect(async () => {  
//         const res = await fetch(backend, { 
//             next: {revalidate: 10}
//         });
//         if(!res.ok){
//             throw new Error(`failed to fetch ${res.status}`);
//         }
//         const data = await res.json();
//         setImagenesDB(data);
//       }, []);
    
//     // if (!ImagenesDB) return(<div />);

//     console.log(ImagenesDB);


function borrarImagen(id){
    axios.delete("http://localhost:8080/nasa/" + id).then(res=>{
        console.log(res.ImagenDB)
        alert("Imagen borrada")
        // navegar(0)
    }).catch(err=>console.log(err))
}

return (
    <div>
      <AgregarImagen obtenerImagenDB={obtenerImagenDB} />
        <h2>Imágenes</h2>
        <div className="container-imagenes">

                {

                    ImagenDB && ImagenDB.length !== 0 && ImagenDB.map(image=>(

                        <div className="card" key={image._id}>
                            <img id="img" src={image.url} alt={image.titulo} width="200px" />
                            <p>Fecha: {image.fecha}</p>
                            <p>Título: {image.titulo}</p>
                            <p id="explicacion">Explicación: {image.explicacion}</p>

                            <p>Si quiere Editar la imagen, haga click <a href='/editar'>aquí</a></p>
                            <button className="btn btn-danger" id="button" onClick={()=>{borrarImagen(image._id)}}>Borrar Imagen</button>

                        </div>

                    ))

                }
        </div>

        
</div>
    
  )
}

export default Imagenes;

