import React from "react";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Card.css";
// import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
// import Tarjetas from "./Tarjetas";


function Imagenes(){
    const[data, setData] = useState([{}]);
    const navegar = useNavigate()
    useEffect(() => {
        // const obtenerImagen = async() => {
            // const ImagenesDB = await 
            axios.get("http://localhost:8080/nasa/ImagenDB").then(res => {
            console.log(res);
            setData(res.data.content);
        }).catch(err => console.log(err))
        // obtenerImagen();
    },  []);

    console.log(data);

    if (!data) return(<div />);

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


function borrarImagen(idImagen){
    axios.delete("http://localhost:8080/nasa/" + idImagen).then(res=>{
        console.log(res.data)
        alert("Imagen borrada")
        navegar(0)
    }).catch(err=>console.log(err))
}

return(
    <div className="container">
        <div className="row ">
            <h2> Imágenes agregadas a la Base de Datos </h2>
        </div>
            <div className="row row-cols-1 row-cols-md-2 g-4" >
            {/* <Grid container spacing={2}> */}
            {data && data.map((item)  => (
                // <Grid item key={item._id} xs={12} sm={6} md={6} lg={6}>
                //     <Card >
                //         <CardMedia
                //             component="img"
                 
                //             alt={item.titulo}
                //             src={item.url} 
                //             style={{ maxWidth: "100%", height:"200px" }}
                //         />
                //         <CardContent>
                //             <Typography gutterBottom variant="h5" component="div">
                //                 {item.titulo}
                //             </Typography>
                //             <Typography variant="body2" color="text.secondary">
                //                 {item.fecha}
                //              </Typography>
                //             <Typography variant="h6" color="text.primary">
                //                 {item.explicacion}
                //             </Typography>
                //         </CardContent>
                 <div className="col"key={item._id+1}>
                    <div className="card" key={item._id+2}>
                         {/* <Tarjetas url={item.url} titulo={item.titulo} fecha={item.fecha} explicacion={item.explicacion} key={item._id}/>  */}
                         <div  className="col-sm-6 offset-3" key={item._id} >
                            <img src={item.url} alt={item.titulo} width="200px" />
                            <p>Fecha: {item.fecha}</p>
                            <p>Título: {item.titulo}</p>
                            <p>Explicación: {item.explicacion}</p> 
                        
                        <Link to={ `/editar/${item._id}`}><li className="btn btn-success" id="link">Editar Imagen</li></Link>
                        <button className="btn btn-danger" id="button" onClick={()=>{borrarImagen(item._id)}}>Borrar Imagen</button>
                        <hr className="mt-4"></hr>
                           
                    {/* </Card>
                </Grid> */}
                       </div>
                    </div> 
                </div>
            ))} 
            {/* </Grid> */}
            
            </div>
    </div>
                
    
);
}

export default Imagenes;

