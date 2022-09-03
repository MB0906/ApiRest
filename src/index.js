/*
    *Se crean constantes para poder despues ser utilizadas.
*/
const express = require("express");
const cors = require("cors");
const v1ProductRouter = require("./v1/routes/productRoutes");
const v1CategoryRouter = require("./v1/routes/categoryRoutes");

//#region Configuracion para que no tenga problema la Api/Rest.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());
//#endregion

/* 
    * Se declaran las routes habilitadas de la version 1.0
*/
app.use("/api/v1/products", v1ProductRouter);
app.use("/api/v1/category", v1CategoryRouter);


app.listen(PORT, () =>{
    console.log(`🚀 Me estoy ejecutando en el puerto ${PORT}`)
})