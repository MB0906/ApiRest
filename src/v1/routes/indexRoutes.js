/*
    *Se crean constantes para poder despues ser utilizadas.
*/
const express = require("express");
const router = express.Router();
const indexControllers = require("../../controllers/indexControllers");

/*
    *Se instancias las rutas que utiliza el Readme, para que cuando un persona ingresa directamente a la url salgo un mensaje para que entienda de que se trata.
*/
router 

    .get("/",indexControllers.getIndex)
    
/*
    *Exporta la constate para que sea usada en otro documento si es requerido.
*/
module.exports = router;