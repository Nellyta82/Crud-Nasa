import React, {useEffect, useState} from 'react';


function Nasa(){

    const backend = 'https://crud-nasa-api.vercel.app/nasa/getAllImage' 
    const [photoData, setPhotoData] = useState(null);
    useEffect(async () => {  
        const res = await fetch(backend);
        const data = await res.json();
        setPhotoData(data);
      }, []);
    
    if (!photoData) return(<div />);

    return(
      
         <div>
            <div className="row ">
                <h2> Imagen del día de la Nasa </h2>
                <p><i>Bienvenidos, acá van a poder ver la Foto o Vídeo del día que nos muestra la NASA, la cuál es tomada por fotógrafos profesionales que trabajan para la NASA. Adicional, vas a poder añadir fotos, editarlas y eliminarlas, para que puedas tener acá tu galería de imágenes y observarlas en el momento que lo desees.</i></p>
            </div>
            <h2><u><i>Título:</i></u> {photoData.title}</h2>
            <h2><u><i>Fecha:</i></u> {photoData.date}</h2>
            <section>
                <div id='image-video'>
                {photoData.media_type === "image"?
                    <img src={photoData.url} alt={photoData.title} />
                    :
                    <iframe title='video' src={photoData.url}></iframe>
                }
                </div>
               
                <p><u><i>Explicación:</i></u> {photoData.explanation}</p>   
            </section>  
            <p><i>Gracias por visitar mi página, epero la disfrutes y vuelvas cada día para conocer más sobre nuestro Univeso.</i></p> 
            <br></br> 
        </div>       
    );
}

export default Nasa;


// El código anterior trae problema, lo acomodé a como debería estar escrita la función 
// pero me trae en blanco los datos de la página de la NASA y en la cónsola me dice que todo está ok con status 200, 
// así que para poder ver el resultado, decido dejarlo de esta manera.
// A continuación dejo el código como debería ser pero que no se ve: 


// import React, {useEffect, useState} from 'react';

// import { Link } from 'react-router-dom';

// function Nasa(){

   
//     const [photoData, setPhotoData] = useState([]);
//     useEffect(() => {  
//         async function fetchData(){
//         setPhotoData(null);
//         const response = await fetch ("http://localhost:8080/nasa/getAllImage")
//         console.log(response);
//         if (!ignore) {
//             setPhotoData(response);
//         }
//     }
//         let ignore = false;
//         fetchData();
//         return () => {
//             ignore = true;
//           }
//       }, []);
    
//     if (!photoData) return(<div />);

//     return(
      
//          <div>
//              <Link to='/'><button className='create_button'>Volver a Home</button></Link>
//             <h2>Título: {setPhotoData.title}</h2>
//             <h2>Fecha: {photoData.date}</h2>
//             <section>
//                 {photoData.media_type === "image"?
//                     <img src={photoData.url} alt={photoData.title} />
//                     :
//                     <iframe title='video' src={photoData.url}></iframe>
//                 }
               
//                 <p>Explicación: {photoData.explanation}</p>   
//             </section>  
//             <p>Cada día podrás observar aquí la Foto del día que muestra la Nasa, la cuál es tomada por fotógrafos profesionales que trabajan para la NASA</p>  
//         </div>       
//     );
// }

// export default Nasa;


