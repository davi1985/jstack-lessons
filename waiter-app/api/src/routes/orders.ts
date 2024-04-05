import { Router } from 'express';

const router = Router();

// List Orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create Order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change Order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});

export { router as ordersRoutes };
