import type { Response } from "express";
import { createRevenue, deleteRevenue, findUserRevenues, updateRevenue } from "../services/revenue.js";
import type { ExtendedRequest } from "../types/extendedRequest.js";

export const revenuePost = async (req: ExtendedRequest, res: Response) => {
    const { description, value, category, date } = req.body;

    if (!req.user) {
        return res.status(401).json({ error: 'Usuario nao autenticado' })
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

export const getRevenues = async (req: ExtendedRequest, res: Response) => {
    if (!req.user) {
        return res.status(401).json({
            error: "Usuario não autenticado"
        })
    }

    const userId = req.user.id;

    const revenues = await findUserRevenues(userId);

    return res.json(revenues);
}

export const revenuePut = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    try {
        const revenue = await updateRevenue({
            id: Number(id),
            userId: req.user!.id,
            ...req.body
        });

        return res.json(revenue);

    } catch (error) {
        return res.status(400).json({
            error: error instanceof Error ? error.message : "Erro interno"
        });
    }

}

export const revenueDelete = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    try {
        const revenue = await deleteRevenue(
            Number(id),
            req.user!.id,
        );

        return res.json({message:"Receita apagada com sucesso"});

    } catch (error){
        return res.status(400).json({
            error: error instanceof Error ? error.message : "Erro interno"
        });
    }
}