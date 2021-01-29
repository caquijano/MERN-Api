import { Router } from "express";
import * as expenseController from './expenses.controller'

const router = Router();

router.get('/expenses', expenseController.getExpenses);

router.get('/expenses/:id', expenseController.getExpense);

router.post('/expenses', expenseController.createExpense);

router.delete('/expenses/:id', expenseController.deleteExpenses);

router.put('/expenses/:id', expenseController.updateExpense);

export default router