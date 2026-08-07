import type { Response } from "express";
import type { ExtendedRequest } from "../types/extendedRequest.js";
import { createExpense, deleteExpense, getExpenses, updateExpense } from "../services/expense.js";

export const expensePost = async (req: ExtendedRequest, res: Response) => {
    const { description, value, category, date } = req.body;

    if (!req.user) {
        return res.status(401).json({ error: 'Usuario nao autenticado' })
    }
    const userId = req.user.id;

    const expense = await createExpense({
        description,
        value,
        category,
        date,
        userId
    });

    return res.status(201).json(expense);
}

export const expenseGet = async (req: ExtendedRequest, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Usuario nao autenticado' })
    }

    const expenses = await getExpenses(req.user.id);

    return res.json(expenses);
}

export const expensePut = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    try {
        const expense = await updateExpense({
            id: Number(id),
            userId: req.user!.id,
            ...req.body
        });

        return res.json({
            message: "Despesa atualizada com sucesso",
            expense
        });

    } catch (error) {
        return res.status(400).json({
            error: error instanceof Error ? error.message : "Erro interno"
        });
    }
}

export const expenseDelete = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    try {
        const expense = await deleteExpense(
            Number(id),
            req.user!.id,
        );

        return res.json({
            message: "Despesa apagada com sucesso"
            
        });

    } catch (error) {
        return res.status(400).json({
            error: error instanceof Error ? error.message : "Erro interno"
        });
    }
}