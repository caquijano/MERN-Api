import { Router } from "express";
import * as saleController from './sales.controller'

const router = Router();

router.get('/saleDetails', saleController.getSales);

router.get('/saleDetails/:id', saleController.getSale);

router.post('/saleDetails', saleController.createSale);

router.delete('/saleDetails/:id', saleController.deleteSales);

router.put('/saleDetails/:id', saleController.updateSales);

export default router