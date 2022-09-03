/*
    *Se crea la constante msyql la cual tiene como valor las dependencias "MYSQL";
    *Se crea la constante promisify la cual tiene como resultado usar las promise en las consultas mysql.
*/
const mysql = require("mysql");
const {promisify} = require("util");
/*
    *Se crea la constante database la cual tiene como parametros los datos de la base de datos a conectarse.
*/
const { database } = require("./keys");

/*
    *Se crea la constante pool la cual se usa para realizar la conexión a la base de datos.
*/
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log("La conexión a la base de datos, se ha perdido.");
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log("Hay muchas conexiones a la base de datos.");
        }
        if(err.code === 'ECONNREFUSED'){
            console.log("La conexión a la base de datos fue desactivada.");
        }
    }
    if(connection){
        connection.release();
        console.log("La conexión a la base de datos es exitosa");
        return;
    }
})

/*
    *Se exporta pool para ser utilizado en el documento en el cual se haran las consutlas SQL.
*/
pool.query = promisify(pool.query);

module.exports = pool;