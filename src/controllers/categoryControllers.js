/*
    *Se crea una constante la cual tiene como valor la function ubidacada en la ubicacion descrita ("../services/categoryService");
*/
const categoryService = require("../services/categoryService");

/*
    *Se crea una function constante la cual envia el resultado enviado desde otra function, hacia el front-end.
*/
const getAllCategory = async (req, res) =>{
    const categoryAll = await categoryService.getAllCategory();
    res.send(categoryAll);
}

/*
    *Exporta la function para que sea usada en otro documento si es requerido.
*/
module.exports = {
    getAllCategory,
};
