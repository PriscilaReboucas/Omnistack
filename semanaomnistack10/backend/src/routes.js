const { Router } = require('express');
//importa a biblioteca para consulta de apis.
const axios = require('axios');
const Dev = require('./models/Dev');
const DevController = require('./controllers/DevController');


// importar as rotas do express
const routes = Router();
 
// rota acessa o metodo do controller nome store.
routes.post('/devs', DevController.store);       

 //exportar as rotas para aplicação
module.exports = routes;   
