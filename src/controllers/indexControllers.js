/*
    *Se crea una constante la cual tiene como valor la function ubidacada en la ubicacion descrita ("../services/indexService");
*/
const indexService = require("../services/indexService");

/*
    *Se crea una function constante la cual envia el resultado enviado desde otra function, hacia el front-end.
*/
const getIndex = async (req, res) =>{
    const readme = await indexService.getIndex();
    res.send(readme);
}

/*
    *Exporta la function para que sea usada en otro documento si es requerido.
*/
module.exports = {
    getIndex,
};
