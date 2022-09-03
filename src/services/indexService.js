/*
    *Se crea un constante, la cual va a ser enviada al momento que se solicite la function getIndex
*/

const readme = `
<h1>Hola😀</h1>
<h2>Mi nombre es Marco Bahamonde y te cuento por que realice esta Api/Rest.</h2>
<h3>Proyecto iniciado para la empresa BSALE, consta de una ApiRest realizado bajo el lenguaje Node, con dependencias basicas para su uso (Cors, Express, Mysql y Nodemon).</h3>
<h4>Front-end <a href="https://shopbsale.netlify.app/">AQUI</a></h4>
<h3>Routes :</h3>
<h3>/api/v1/products esta te devuelve los productos filtrados de una categoria y por precios.</h3>
<h3>/api/v1/products/"categoryid" esta te devuelve los productos filtrados de una categoria seleccionada por el usuario y por precios.</h3>
<h3>/api/v1/products/search/"text" devuelve un producto o muchos los cuales contengan esos valores ingresados de nombre, igualmente filtrados por precio </h3>
<h3>/api/v1/category esta te devuelve los datos de las categorias existentes.</h3>
`;

/*
    *Function que devuelve un valor statico, cuando se consulta routa a la que ira asociada.
*/
const getIndex = async () => {
    return readme;
};

/*
    *Exporta la function para ser ocupada en cualquier documento dentro del proyecto
*/
module.exports = {
   getIndex
};