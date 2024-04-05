import { Router } from 'express';
import { CategoryController } from './app/controllers/CategoryController';
import { ContactController } from './app/controllers/ContactController';

const contactController = new ContactController();
const categoryController = new CategoryController();
const routes = Router();

routes.get('/contacts', contactController.index);
routes.get('/contacts/:id', contactController.show);
routes.post('/contacts', contactController.store);
routes.delete('/contacts/:id', contactController.delete);
routes.put('/contacts/:id', contactController.update);

routes.get('/categories', categoryController.index);
routes.get('/categories/:id', categoryController.show);
routes.post('/categories', categoryController.store);
routes.delete('/categories/:id', categoryController.delete);
routes.put('/categories/:id', categoryController.update);

export { routes };
