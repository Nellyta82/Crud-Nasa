const cors = require("cors");
const express = require("express");
const dbConnection = require("../database/dbconnection");

class Server{

    constructor(){
        this.app = express();
        this.rootPath = "/nasa";
        this.imagenesPath = '/nasa/imagenes';
        this.port = process.env.PORT; 
        this.usuariosPath = '/nasa/usuarios';
        this.authPath = '/nasa/auth';

        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    async conectarDB(){
        await dbConnection();
    }
  
    // middlewares(){ 
    //     this.app.use(express.json());
    //     this.app.use(express.static("public"));
    //     this.app.use(express.urlencoded({ extended: true }));
    //     this.app.use(cors());
    // }

    // CORS(){
    //     this.app.use(cors({    
    //         origin: "https://crud-nasa-api.vercel.app/",
    //         methods: ["GET", 'POST', 'PUT', 'PATCH', 'DELETE'],
    //         credentials: true
    //     }));
        // this.app.use((req, res, next) => {
        //     res.setHeader('Access-Control-Allow-Origin', 'https://crud-nasa.vercel.app/');
        //     res.setHeader('Access-Control-Allow-Credentials', 'true');
        //     res.setHeader("Access-Control-Max-Age", "1800");
        //     res.setHeader('Access-Control-Allow-Headers','Content-Type, Accept');
        //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // next();
        // });
    // }

    middlewares() {
        this.app.use(cors({
          origin:['https://crud-nasa.vercel.app'],
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          credentials: true,
    }));
    
        this.app.use(express.json());

        this.app.use(express.static("public"));
      }

    routes(){
        this.app.use(this.rootPath, require("../routes/imagenes"));
        this.app.use(this.rootPath, require("../routes/usuarios"));
        this.app.use(this.imagenesPath,require('../routes/imagenes'));
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
        this.app.use(this.authPath, require("../routes/usuarios"));
    }

    listen (){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });

        // this.app.get('/',(_,res)=>{
        //     res.send('Conexión exitosa')
        // });
    }
    
}

module.exports = Server;
