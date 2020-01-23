const { Router } = require('express')
const DevController = require('./controllers/DevControllers')
const SearchControllers = require('./controllers/SearchControllers')

const routes = Router()

// Tipos de Parâmetros

//Query Params: acesso usando = "request.query" (Filtros, ordenação, paginação, ...) Utilizado no GET, para criar querys
//Route Params: acesso usando = "request.params" (Identificar um rescurso na alteração ou remoção)
//Body: request.body (Criar e passar grandes dados)


routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.post('/devs/update', DevController.update);
routes.delete('/devs/delete', DevController.delete);

routes.get('/search', SearchControllers.index);

module.exports = routes