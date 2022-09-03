/*
    *Se crean constantes para poder despues ser utilizadas.
*/
const express = require("express");
const router = express.Router();
const categoryControllers = require("../../controllers/categoryControllers");

/*
    *Se instancias las rutas que utilizaran las categorias.
*/
router 

    .get('/',categoryControllers.getAllCategory)

/*
    *Exporta la constate para que sea usada en otro documento si es requerido.
*/   
module.exports = router;