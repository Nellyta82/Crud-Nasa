const User = require("../models/usuario");
const bcryptjs = require("bcryptjs");

const obtenerUsuarios = async (req, res)=>{
    const usuarios= await User.find();

    res.status(200).json({
        msg:"Estos son los usuarios de la DB",
        usuarios,
    });  
};

const saludoUsuarios = (req, res)=>{
    const { nombre, apellido}= req.params

    res.status(200).json({
        msg:`Bienvenido ${nombre} ${apellido} aquí encotrarás fotos del día de la NASA`,
    });  
};

const actualizarUsuarios = async (req, res)=>{
    const {id} = req.params;
    const {_id, password, nombre, apellido, correo, ...resto} = req.body;

    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await User.findByIdAndUpdate(id,{$set: {resto, nombre:nombre, apellido:apellido, correo:correo, password:password}});

    res.status(200).json({
        msg: "El usuario ha sido actualizado con éxito",
        usuario,
    });  
};

const agregarUsuarios = async (req, res)=>{

    const {nombre, apellido, correo, password} = req.body;
    const newUser = new User({nombre, apellido, correo, password});

    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);

    await newUser.save();

    res.status(200).json({
    msg: "El usuario ha sido agregado con éxito a la DB",
    newUser,
    });
}; 

const borrarUsuarios = async (req,res) => {
    const {id} = req.params;
    const usuario = await User.findByIdAndUpdate(id, {estado: false})

    res.status(200).json({
        msg: "El usuario ha sido borrado con éxito",
    });
};

module.exports = {obtenerUsuarios, saludoUsuarios, actualizarUsuarios, agregarUsuarios, borrarUsuarios}

