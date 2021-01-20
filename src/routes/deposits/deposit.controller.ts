import { RequestHandler, Response } from "express";
import Deposit from "./Deposit";

export const createDeposit: RequestHandler = async (req, res) => {
    
    const depositFound = await Deposit.findOne({ _id: req.body.name });
    console.log('punto 1')
    if (depositFound) {
        return res.status(303).json({ message: "deposit already exist..." });
    } else {
        const deposit = new Deposit(req.body);
        const savedDeposit = await deposit.save();
        res.json(savedDeposit);
    }
};
export const getDeposit: RequestHandler = async (req, res) => {
    const depositFound = await Deposit.findById(req.params.id);
    console.log(depositFound)
    if (!depositFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(depositFound);
    }
};
export const getDeposits: RequestHandler = async (req, res) => {
    const deposits = await Deposit.find();
    try {
        return res.json(deposits);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteDeposits: RequestHandler = async (req, res) => {
    const depositDelete = await Deposit.findByIdAndDelete(req.params.id);
    if (!depositDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "deposit Deleted..." });
    }
};
export const updateDeposits: RequestHandler = async (req, res) => {
    const depositUpdate = await Deposit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!depositUpdate) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "deposit Updated..." });
    }
};
