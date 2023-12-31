const { Schema, model} = require("mongoose");

const UsuariosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    apellido: {
        type: String,
        required: [true, "El apellido es obligatorio"],
    },
    correo: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "la contraseña es obligatoria"],
    },
    // rol: {
    //     type: String,
    //     required: true,
    //     enum: ["ADMIN_ROLE", "USER_ROLE"],
    // },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

const User = model("User", UsuariosSchema);

module.exports = User;