/*
    *Se crean constantes para poder despues ser utilizadas.
*/
const express = require("express");
const router = express.Router();
const productControllers = require("../../controllers/productControllers");

/*
    *Se instancias las rutas que utilizaran los product.
*/
router 

    .get('/',productControllers.getAllProducts)
    .get('/:categoryId', productControllers.getProductByCategory)
    .get('/search/:productName', productControllers.getProductBySearch)
    
/*
    *Exporta la constate para que sea usada en otro documento si es requerido.
*/
module.exports = router;