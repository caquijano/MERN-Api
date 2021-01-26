import { RequestHandler, Response } from "express";
import SaleDetail from "./SaleDetail";

export const createSaleDetail: RequestHandler = async (req, res) => {
    const saleDetailFound = await SaleDetail.findOne({ invoice: req.body.invoice });
    if (saleDetailFound) {
        return res.status(303).json({ message: "sale already exist..." });
    } else {
        const saleDetail = new SaleDetail(req.body);
        const savedSaleDetail = await saleDetail.save();
        res.json(savedSaleDetail);
    }
};
export const getSaleDetail: RequestHandler = async (req, res) => {
    const saleDetailFound = await SaleDetail.findById(req.params.id);
    console.log(saleDetailFound)
    if (!saleDetailFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(saleDetailFound);
    }
};
export const getSaleDetails: RequestHandler = async (req, res) => {
    const saleDetails = await SaleDetail.find();
    try {
        return res.json(saleDetails);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteSaleDetails: RequestHandler = async (req, res) => {
    const saleDetailDelete = await SaleDetail.findByIdAndDelete(req.params.id);
    if (!saleDetailDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "sale Deleted..." });
    }
};
export const updateSaleDetails: RequestHandler = async (req, res) => {
    const saleDetailUpdate = await SaleDetail.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!saleDetailUpdate) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "sale Updated..." });
    }
};
