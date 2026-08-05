import type {  Response } from "express";
import { createRevenue } from "../services/revenue.js";
import type { ExtendedRequest } from "../types/extendedRequest.js";
import { error } from "node:console";

export const revenuePost = async (req:ExtendedRequest, res: Response) => {
    const { description, value, category, date } = req.body;

    if(!req.user){
        return res.status(401).json({error:'Usuario nao autenticado'})
    }
    const userId = req.user.id;

    const revenue = await createRevenue({
        description,
        value,
        category,
        date,
        userId
    });

    return res.status(201).json(revenue);

}