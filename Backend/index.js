require("dotenv").config();

const Server = require("../Backend/models/server");

const server = new Server();

server.listen();