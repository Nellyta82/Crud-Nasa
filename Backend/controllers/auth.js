const bcryptjs = require("bcryptjs");
const User = require("../models/usuario");
const generarJWT = require("../middlewares/jwt");

const login = async (req,res) => {
    const {correo, password} = req.body;

    try{
        const usuario = await User.findOne({correo});

        if(!usuario){
            return res.status(400).json({ 
                msg: "El usuario no existe en la DB"
            })
        }

        if(!usuario.estado){
            return res.status(400).json({ 
                msg: "El usuario está inhabilitado"
            })

        }

        const validPassword = bcryptjs.compareSync(password, usuario.password)
        if(!validPassword){
            return res.status(400).json({ 
                msg: "El password no es correcto"
            })
        }

        const token = await generarJWT(usuario.id)
            res.json({
                usuario,
                token
            })


    }   catch(error){
            console.log(error);
    }

};

module.exports = { login }