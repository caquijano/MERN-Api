import { Router } from "express";
import * as saleController from './sales.controller'

const router = Router();

router.get('/sales', saleController.getSales);

router.get('/sales/:id', saleController.getSale);

router.post('/sales', saleController.createSale);

router.delete('/sales/:id', saleController.deleteSales);

router.put('/sales/:id', saleController.updateSales);

export default router