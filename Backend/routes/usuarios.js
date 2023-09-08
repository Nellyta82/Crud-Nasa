const { Router} = require("express");
const { check } = require("express-validator");

const router = Router();

const { obtenerUsuarios, actualizarUsuarios, agregarUsuarios, borrarUsuarios, saludoUsuarios, listaUsuarios, statusUsuarios } = require("../controllers/usuarios");
const { validarCampos, usuarioExistePorId, emailExiste, validarJWT } = require("../middlewares/validators");
const { login } = require("../controllers/auth");

router.get("/UsuariosDB", validarJWT, obtenerUsuarios);
router.get("/saludo/:nombre/:apellido", saludoUsuarios);

router.put("/usuarios/:id", [check("id", "No es un ID válido").isMongoId(), check("id").custom(usuarioExistePorId), validarCampos,], actualizarUsuarios);

router.post("/usuarios", [check("nombre", "El nombre es obligatoria").not().isEmpty(), check("password", "El password debe contener más de 6 letras").isLength({ min:6,}), check("correo", "El correo no es válido").isEmail(), check("correo").custom(emailExiste), validarCampos], agregarUsuarios);
router.post("/login", [check("correo", "El correo es obligatorio").isEmail(), check("password", "La contraseña es obligatoria").not().isEmpty(), validarCampos], login);

router.delete("/:id",[check("id","No es un ID válido").isMongoId(), check("id").custom(usuarioExistePorId), validarJWT, validarCampos,], borrarUsuarios);

module.exports = router;