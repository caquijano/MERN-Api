import { RequestHandler } from "express";
import EntryDetail from "./EntryDetail";

export const createEntryDetail: RequestHandler = async (req, res) => {
    const entrydetailFound = await EntryDetail.findOne({ _id: req.body.name });
    
    if (entrydetailFound) {
        return res.status(303).json({ message: "EntryDetail already exist..." });
    } else {
        const entryDetail = new EntryDetail(req.body);
        const savedEntryDetail = await entryDetail.save();
        res.json(savedEntryDetail);
    }
};
export const getEntryDetail: RequestHandler = async (req, res) => {
    const entryFound = await EntryDetail.findOne({detailId: req.params.id});
    if (!entryFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(entryFound);
    }
};
export const getEntryDetails: RequestHandler = async (req, res) => {
    const entries = await EntryDetail.find();
    try {
        return res.json(entries);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteEntryDetails: RequestHandler = async (req, res) => {
    const entryDelete = await EntryDetail.findByIdAndDelete(req.params.id);
    if (!entryDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "EntryDetail Deleted..." });
    }
};
export const updateEntryDetails: RequestHandler = async (req, res) => {
    const entryUpdate = await EntryDetail.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!entryUpdate) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "EntryDetail Updated..." });
    }
};
