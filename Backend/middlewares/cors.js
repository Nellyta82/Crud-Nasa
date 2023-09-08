// const cors = require("cors");
// const express = require("express");
// const {validationResult} = require('express-validator');

// const acceso = (req, res, next) => {
//     const errors = validationResult(req);

//     res.header("Access-Control-Allow-Origin", "http://localhot:3000");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

//         if (!errors.isEmpty()) {
//            return res.status(400).json({ errores: errors.array() });
//         }

//     next();
// };

// module.exports = acceso;