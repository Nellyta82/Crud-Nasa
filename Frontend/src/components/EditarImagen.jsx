// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

// function EditarImagen(){
//     const params= useParams()
//     const [fecha, setFecha] = useState('');
//     const [url, setUrl] = useState('');
//     const [titulo, setTitulo] = useState('');
//     const [explicacion, setExplicacion] = useState('');
//     const navegar = useNavigate()
//     useEffect(() => {
//         axios.patch('http://localhost:8080/nasa/' + params.id).then(res=>{
//             let dataImagen = res.data

//             console.log('Data de la imagen', dataImagen.data.titulo)
//             setFecha(dataImagen.data.fecha)
//             setUrl(dataImagen.data.url)
//             setTitulo(dataImagen.data.titulo)
//             setExplicacion(dataImagen.data.explicacion)

//         });
//     },[])

//     function editarImagen () {
//         const imagenUpdate={
//             fecha:fecha,
//             url:url,
//             titulo:titulo,
//             explicacion:explicacion,
//         }
//             axios.patch('http://localhost:8080/nasa/' + params.id,imagenUpdate).then(res=> {
//             console.log(res.data)
//             alert('La imagen ha sido actualizada con éxito')
//             navegar("/")
//         })
//     }


import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';


const EditarImagen = () => {
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');
  const [url, setUrl] = useState('');
  const [titulo, setTitulo] = useState('');
  const [explicacion, setExplicacion] = useState('');
  const formRef = useRef(null); 

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const backendResponse = await axios.patch(`https://crud-nasa-api.onrender.com/nasa//${id}`, { 
      id: id,
      fecha: fecha,
      url: url,
      titulo: titulo,
      explicacion: explicacion,
    });
    backendResponse();

    formRef.current.reset();
    setId('')
    setUrl('');
    setTitulo(''); 
    setExplicacion(''); 
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
};
    return(
        <div className="container" id="editar">
            <div className="row">
                <h2 className="mt-4">Editar a {titulo} </h2>
            </div>
            
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label"> Fecha de la Imagen </label>
                <input type="text" className="form-control" id="formGroupExampleInput" value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label"> Url de la Imagen </label>
                <input type="text" className="form-control" id="formGroupExampleInput2" value={url} onChange={(e)=>setUrl(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label"> Título de la Imagen </label>
                <input type="text" className="form-control" id="formGroupExampleInput3" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label"> Explicación de la Imagen </label>
                <input type="text" className="form-control" id="formGroupExampleInput4" value={explicacion} onChange={(e)=>setExplicacion(e.target.value)}/>
            </div> 

        <button onClick={handleSubmit} className="btn btn-success"> Editar Imagen </button>
    </div>
    )
}

export default EditarImagen; 

// import React, { useState } from 'react';
// import axios from 'axios';


// function EditarImagen() {
//   const [id, setId] = useState('');
//   const [fecha, setFecha] = useState('');
//   const [url, setUrl] = useState('');
//   const [titulo, setTitulo] = useState('');
//   const [explicacion, setExplicacion] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/nasa/${id}`);
//       const imagen = response.data;
//       setFecha(imagen.fecha);
//       setUrl(imagen.url);
//       setTitulo(imagen.titulo);
//       setExplicacion(imagen.explicacion);
//     } catch (error) {
//       console.error('Error al buscar la imagen:', error);
//       setFecha('');
//       setUrl('');
//       setTitulo('');
//       setExplicacion('');
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:8080/nasa/${id}`, {
//         fecha,
//         url,
//         titulo,
//         explicacion
//       });
//       console.log('Imagen actualizada exitosamente');
//     } catch (error) {
//       console.error('Error al actualizar la imagen:', error);
//     }
//   };

//   return (
//     <div className='containerActualizar'>
//       <h2 className='tituloActualizar'>Actualizar Imagenes</h2>
//       <div className='formActualizar'>
//       <input
//         type="text"
//         placeholder="Ingrese el ID de la Imagen"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <button onClick={handleSearch}>Buscar</button>
//       </div>
//       {titulo && (
//         <div className='resultActualizar'>
//           <h3>Detalles de la Imagen</h3>
//           <input
//             type="text"
//             placeholder="Titulo"
//             value={titulo}
//             onChange={(e) => setTitulo(e.target.value)}
//           />
//           <button onClick={handleUpdate}>Actualizar</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EditarImagen;
    