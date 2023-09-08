const { Schema, model} = require("mongoose");

const ImageSchema = new Schema({
    fecha: {
        type: String,
    },
    url: {
        type: String,
    },
    titulo: {
        type: String,
    },
    explicacion: {
        type: String,
    },
});

const Image = model("Image", ImageSchema);

module.exports = Image;