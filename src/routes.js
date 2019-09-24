const express = require('express');
const routes = express.Router();

const cepController = require('./controller/cepController');

routes.post('/cep', cepController.findCep);
// routes.get('/frete', cepController.calcFrete);

module.exports = routes;