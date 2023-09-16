const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de datos conectada");
       
    }   catch (error) {
        console.log(error);
        throw new Error("Error al iniciar la DB");   
    }
};

module.exports = dbConnection;