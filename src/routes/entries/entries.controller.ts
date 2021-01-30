import { RequestHandler } from "express";
import Entry from "./Entry";

export const createEntry: RequestHandler = async (req, res) => {
    const entryFound = await Entry.findOne({ _id: req.body.name });
    
    if (entryFound) {
        return res.status(303).json({ message: "entry already exist..." });
    } else {
        const entry = new Entry(req.body);
        const savedEntry = await entry.save();
        res.json(savedEntry);
    }
};
export const getEntry: RequestHandler = async (req, res) => {
    const entryFound = await Entry.findById(req.params.id);
    if (!entryFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(entryFound);
    }
};
export const getEntries: RequestHandler = async (req, res) => {
    const entries = await Entry.find();
    try {
        return res.json(entries);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteEntries: RequestHandler = async (req, res) => {
    const entryDelete = await Entry.findByIdAndDelete(req.params.id);
    if (!entryDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "Entry Deleted..." });
    }
};
export const updateEntries: RequestHandler = async (req, res) => {
    const entryUpdate = await Entry.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!entryUpdate) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "Entry Updated..." });
    }
};
