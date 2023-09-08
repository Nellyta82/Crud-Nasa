const { Router} = require("express");
const { check } = require("express-validator");

const router = Router();

const { obtenerImagenes, obtenerImagenDB, actualizarImagenes, agregarImagenes, borrarImagenes} = require("../controllers/imagenes");
const { validarCampos, ImagenExiste, validarImagenPorID } = require("../middlewares/validators");

router.get("/getAllImage", obtenerImagenes);
router.get("/ImagenDB", obtenerImagenDB);

router.put("/:id", [check("id", "No es un ID válido").isMongoId(), check("id").custom(validarImagenPorID), validarCampos,], actualizarImagenes);

router.post("/", [check("url", "La url de la Imagen es obligatoria").not().isEmpty(), check("titulo", "El título de la Imagen es requerido").not().isEmpty(), check("image").custom(ImagenExiste), validarCampos], agregarImagenes);

router.delete("/:id",[check("id","No es un ID válido").isMongoId(), check("id").custom(validarImagenPorID), validarCampos,], borrarImagenes);

module.exports = router;