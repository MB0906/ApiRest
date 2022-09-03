/*
    *Se crean constantes para poder despues ser utilizadas.
*/
const express = require("express");
const router = express.Router();

/*
    *Se instancias las rutas que utiliza el Readme, para que cuando un persona ingresa directamente a la url salgo un mensaje para que entienda de que se trata.
*/
router 

    .get("/",(req, res) => {
        res.send(`
        <h1>Hola😀</h1>
        <h2>Mi nombre es Marco Bahamonde y te cuento por que realice esta Api/Rest.</h2>
        <h3>Proyecto iniciado para la empresa BSALE, consta de una ApiRest realizado bajo el lenguaje Node, con dependencias basicas para su uso (Cors, Express, Mysql y Nodemon).</h3>
        <h4>Front-end <a href="https://shopbsale.netlify.app/">AQUI</a></h4>
        <h3>Routes :</h3>
        <h3>/api/v1/products esta te devuelve los productos filtrados de una categoria y por precios.</h3>
        <h3>/api/v1/products/"categoryid" esta te devuelve los productos filtrados de una categoria seleccionada por el usuario y por precios.</h3>
        <h3>/api/v1/products/search/"text" devuelve un producto o muchos los cuales contengan esos valores ingresados de nombre, igualmente filtrados por precio </h3>
        <h3>/api/v1/category esta te devuelve los datos de las categorias existentes.</h3>
        `)
    })
    
/*
    *Exporta la constate para que sea usada en otro documento si es requerido.
*/
module.exports = router;