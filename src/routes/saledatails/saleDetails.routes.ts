import { Router } from "express";
import * as saleDetailController from './saleDetails.controller'

const router = Router();

router.get('/saleDetails', saleDetailController.getSaleDetails);

router.get('/saleDetails/:id', saleDetailController.getSaleDetail);

router.post('/saleDetails', saleDetailController.createSaleDetail);

router.delete('/saleDetails/:id', saleDetailController.deleteSaleDetails);

router.put('/saleDetails/:id', saleDetailController.updateSaleDetails);

export default router