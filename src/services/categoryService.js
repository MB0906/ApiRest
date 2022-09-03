/*
    *Se crea una constante la cual tiene como valor la function ubidacada en la ubicacion descrita ("../database/database");
*/
const pool = require("../database/database")

/*
    *Se crea una function constate la cual hace la consulta SQL y retorna el resultado de la consulta en una varible.
*/
const getAllCategory = async () => {
    const categoryAll = await pool.query('SELECT * FROM category');
    let data = JSON.parse(JSON.stringify(categoryAll));
    return data;
};

/*
    *Exporta la function para que sea usada en otro documento si es requerido.
*/
module.exports = {
    getAllCategory,
};
