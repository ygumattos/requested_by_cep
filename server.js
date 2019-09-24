const express = require('express');

// Iniciando app
const app = express();
app.use(express.json()); 

//Configurando rota
app.use('/', require("./src/routes"));

app.listen(3000);