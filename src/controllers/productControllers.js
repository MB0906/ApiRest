/*
    *Se crea una constante la cual tiene como valor la function ubidacada en la ubicacion descrita ("../services/productService");
*/
const productService = require("../services/productService");

/*
    *Se crea una function constante la cual envia el resultado enviado desde otra function, hacia el front-end.
*/
const getAllProducts = async (req, res) => {
    const productAll = await productService.getAllProducts();
    res.send(productAll);
}

const getProductByCategory = async (req, res) => {
    const getProducts = await productService.getProductByCategory(req.params.categoryId);
    res.send(getProducts);
}

const getProductBySearch = async (req, res) => {
    const getProduct = await productService.getProductBySearch(req.params.productName);
    res.send(getProduct);
}

/*
    *Exporta la function para que sea usada en otro documento si es requerido.
*/
module.exports = {
    getAllProducts,
    getProductByCategory,
    getProductBySearch,
};
