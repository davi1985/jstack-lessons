import { Router } from 'express';
import { ListProductsUserCase } from '../app/use-cases/products/list-products';

const router = Router();

// List Products
router.get('/', new ListProductsUserCase().list);

// Create Product
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get Products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

export { router as productsRoutes };
