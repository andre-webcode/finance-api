import type { Request, Response } from "express";
import { createUser } from "../services/user.js";

export const createUsers = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const user = await createUser(name, email, password);

    return res.status(201).json(user);
}