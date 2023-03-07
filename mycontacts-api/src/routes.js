const { Router } = require('express');
const CategoryController = require('./app/controllers/CategoryController');
const ContactsController = require('./app/controllers/ContactController');

const routes = Router();

routes.get('/contacts', ContactsController.index);
routes.get('/contacts/:id', ContactsController.show);
routes.post('/contacts', ContactsController.store);
routes.delete('/contacts/:id', ContactsController.delete);
routes.put('/contacts/:id', ContactsController.update);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);
routes.put('/categories/:id', CategoryController.update);

module.exports = routes;
