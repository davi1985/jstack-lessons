import { Router } from 'express';
import { categoriesRoutes } from './categories';
import { productsRoutes } from './products';
import { ordersRoutes } from './orders';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);
