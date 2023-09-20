const axios = require("axios");
const Image = require("../models/imagen");

// Para traer imágenes de la API
 
const obtenerImagenes = async (_, res)=>{
    const NASA_KEY = process.env.NASA_KEY;
     const getAllImage = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
     const options = {
         "method": "GET",
     };
    
     const response = await fetch(getAllImage, options)
         .then(res => res.json())
         .catch(e => {
             console.error({
                 "msg": "Error",
                 error: e,
             });
         });
        
     console.log("RESPONSE: ", response);
     res.json(response);
     };   
    // try {
    //     const getAllImage = (
    //       await axios(
    //         `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
    //       )
    //     ).data.map((e) => ({
    //       id: e.id,
    //       image: e.image.url,
    //       date: e.date,
    //       title: e.title,
    //       explanation: e.explanation,
    //     }));
    
    //     res.status(200).send(getAllImage);
    //   } catch (error) {
    //     res.status(500).send(error);
    //   }
    // };

// Para traer imágenes de la DB

// const obtenerImagenDB = async (req, res)=>{
//         const ImagenDB= await Image.find();

//         res.status(200).send({
//             msg:"Esta es la lista de Imágenes",
//             data: ImagenDB,
//     });  
// }

const obtenerImagenDB = async (req, res) => {
    let ImagenDB = await Image.find();
  
    res.status(200).json({
      ImagenDB,
    });
  };
  

const actualizarImagenes = async (req, res)=>{
    const{id} = req.params;
    const{ fecha, url, titulo, explicacion } = req.body;

    const image = await Image.findByIdAndUpdate(id, {
        $set:{
            fecha: fecha,
            url: url,
            titulo: titulo,
            explicacion: explicacion,   
        },
    });

    res.status(200).send({
        msg:"La imagen se ha actualizado",
        data: image,
    });
};

const agregarImagenes = async (req, res)=>{

        const{ fecha, url, titulo, explicacion } = req.body;
        const newImage = new Image({ fecha, url, titulo, explicacion});
        await newImage.save();
    
        res.status(200).json({
        msg:"Imagen agregada con éxito a la Base de Datos",
        data: newImage,
        });
};   

const borrarImagenes = async(req,res)=>{

        const{id} = req.params;
        await Image.findByIdAndUpdate(id, {estado:false});

        res.status(200).json({
            msg:"La imagen se ha eliminado",
        });
};

module.exports = {obtenerImagenes, obtenerImagenDB, agregarImagenes, actualizarImagenes, borrarImagenes};