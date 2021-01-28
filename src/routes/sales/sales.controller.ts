import { RequestHandler, Response } from "express";
import Sale from "./Sale";

export const createSale: RequestHandler = async (req, res) => {
    const saleFound = await Sale.findOne({ _id: req.body._id });
    if (saleFound) {
        return res.status(303).json({ message: "sale already exist..." });
    } else {
        const sale = new Sale(req.body);
        const savedSale = await sale.save();
        res.json(savedSale);
    }
};
export const getSale: RequestHandler = async (req, res) => {
    console.log(req.params.id)
    const saleFound = await Sale.findById(req.params.id);
    if (!saleFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(saleFound);
    }
};
export const getSales: RequestHandler = async (req, res) => {
    const sale = await Sale.find();
    try {
        return res.json(sale);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteSales: RequestHandler = async (req, res) => {
    const saleDelete = await Sale.findByIdAndDelete(req.params.id);
    if (!saleDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "sale Deleted..." });
    }
};
export const updateSales: RequestHandler = async (req, res) => {
    const saleUpdate = await Sale.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!saleUpdate) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "sale Updated..." });
    }
};
