const Image = require("../models/imagen");
const User = require("../models/usuario");
const jwt = require("jsonwebtoken");
const {validationResult} = require('express-validator');

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
  
    next();
  };


  const ImagenExiste = async (url) => {
    const image = await Image.findOne(url);
  
    if (!image) {
      throw new Error("Esta Imagen ya existe");
    }
  };


  const validarImagenPorID = async (id) => {
    const image = await Image.findById(id);
  
    if (!image) {
      throw new Error("No existe una Imagen con ese ID");
    }
  };

  const emailExiste = async(correo) => {
    const usuario = await User.findOne({ correo });

    if(usuario){
      throw new Error("El correo electrónico ya está registrado");
    }
  };

  const usuarioExistePorId = async(id) => {
    const usuario = await User.findById(id);

    if(!usuario){
      throw new Error("El correo usuario no existe");
    }
  };

  const validarJWT = async (req, res, next) => {
    const token = req.header('x-token');
  
    if (!token) {
      return res.status(401).json({
        msg: "No hay token en la petición"
      });
    }
    
    try{
      const{uid} = jwt.verify(token, process.env.JWT_KEY);

      const usuario = await User.findById(uid);
      
      if(!usuario){
        return res.status(401).json({
          msg: "Token no válido - usuario no existe en la DB"
        });
      }

      if(!usuario.estado){
        return res.status(401).json({
          msg: "Token no válido - usuario con estado: false en la DB"
        });
      }

      req.usuario = usuario;

      next();

      } catch(error){
          console.log(error)
          res.status(401).json({
            msg: "Token no válido"
          })
      }
  };
  


  module.exports = {validarImagenPorID, ImagenExiste, validarCampos, emailExiste, usuarioExistePorId, validarJWT};