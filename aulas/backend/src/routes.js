const express = require('express');
const {celebrate, Segments, Joi } = require('celebrate'); // Validações
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]:Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create)

routes.get('/ongs', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);


routes.get('/profille', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfilleController.index)


routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(10).max(50),
        description: Joi.string().required().min(30).max(200),
        value: Joi.number().required(),
    })
}), IncidentsController.create);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete)


module.exports = routes;