import { Router } from "express";
import * as depositController from './deposit.controller'

const router = Router();

router.get('/deposits', depositController.getDeposits);

router.get('/deposits/:id', depositController.getDeposit);

router.post('/deposits', depositController.createDeposit);

router.delete('/deposits/:id', depositController.deleteDeposits);

router.put('/deposits/:id', depositController.updateDeposits);

export default router