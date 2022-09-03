/*
    *Se crea una constante la cual tiene como valor la function ubidacada en la ubicacion descrita ("../database/database");
*/
const pool = require("../database/database")

/*
    *Se crea una function constate la cual hace la consulta SQL y retorna el resultado de la consulta en una varible.
    *Esta en especifico recupera todos los productos donde su categoria sea 5 y los ordena por precio (menor a mayor).
*/
const getAllProducts = async () => {
    const productAll = await pool.query('SELECT * FROM product WHERE category = 5 ORDER BY price');
    let data = JSON.parse(JSON.stringify(productAll));
    console.log(data)
    return data;
};

/*
    *Se crea una function constate la cual hace la consulta SQL y retorna el resultado de la consulta en una varible.
    *Esta en especifico recupera todos los productos donde su categoria sea la cual reciba del front-end(usuario) y los ordena por precio (menor a mayor).
*/
const getProductByCategory = async (req) => {
    const products = await pool.query(`SELECT * FROM product WHERE category = ${req} ORDER BY price`);
    let data = JSON.parse(JSON.stringify(products));
    return data;
    
};

/*
    *Se crea una function constate la cual hace la consulta SQL y retorna el resultado de la consulta en una varible.
    *Esta en especifico recupera todos los productos donde su nombre comience o tenga las palabras recibidas del front-end(usuario) y los ordena por precio (menor a mayor).
*/
const getProductBySearch = async (req) => {
    const product = await pool.query(`SELECT * FROM product WHERE name LIKE "%${req}%" ORDER BY price`);
    let data = JSON.parse(JSON.stringify(product));
    return data;
    
};

/*
    *Exporta la function para que sea usada en otro documento si es requerido.
*/
module.exports = {
    getAllProducts,
    getProductByCategory,
    getProductBySearch,
};