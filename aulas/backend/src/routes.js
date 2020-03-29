const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.get('/profille', ProfilleController.index)
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete)


module.exports = routes;