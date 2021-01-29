import { Router } from "express";
import * as expenseController from './expenses.controller'

const router = Router();

router.get('/items', expenseController.getExpenses);

router.get('/items/:id', expenseController.getExpense);

router.post('/items', expenseController.createExpense);

router.delete('/items/:id', expenseController.deleteExpenses);

router.put('/items/:id', expenseController.updateExpense);

export default router