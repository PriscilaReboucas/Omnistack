const { Router } = require('express');
//importa a biblioteca para consulta de apis.
const axios = require('axios');
const Dev = require('./models/Dev');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


// importar as rotas do express
const routes = Router();
 
// rota acessa o metodo do controller nome store.

routes.get('/devs',DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

 //exportar as rotas para aplicação
module.exports = routes;   
