import { RequestHandler, Response } from "express";
import Expense from "./Expense";

export const createExpense: RequestHandler = async (req, res) => {
    const expenseFound = await Expense.findOne({ _id: req.body._id });
    if (expenseFound) {
        return res.status(303).json({ message: "Expense already exist..." });
    } else {
        const expense = new Expense(req.body);
        const savedExpense = await expense.save();
        res.json(savedExpense);
    }
};
export const getExpense: RequestHandler = async (req, res) => {
    const expenseFound = await Expense.findById(req.params.id);
    console.log(expenseFound)
    if (!expenseFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(expenseFound);
    }
};
export const getExpenses: RequestHandler = async (req, res) => {
    const expenses = await Expense.find();
    try {
        return res.json(expenses);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteExpenses: RequestHandler = async (req, res) => {
    const expenseDelete = await Expense.findByIdAndDelete(req.params.id);
    if (!expenseDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "Expense Deleted..." });
    }
};
export const updateExpense: RequestHandler = async (req, res) => {
    console.log("aqui llega 1")
    const expenseUpdate = await Expense.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    console.log("aqui llega2")
    if (!expenseUpdate) {
        console.log("error")
        return res.status(204).json({ message: " resource not found..." });
        
    } else {
        console.log("aqui llega final")
        return res.json({ message: "Expense Updated..." });
    }
};
