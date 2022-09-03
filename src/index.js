/*
    *Se crean constantes para poder despues ser utilizadas.
*/
const express = require("express");
const cors = require("cors");

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




app.listen(PORT, () =>{
    console.log(`🚀 Me estoy ejecutando en el puerto ${PORT}`)
})