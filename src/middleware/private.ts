import type { NextFunction, Response } from "express";
import { verifyToken } from "../libs/jwt.js";
import type { ExtendedRequest } from "../types/extendedRequest.js";

export const PrivateRoute = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            error: 'Token nao informado'
        })
    }
    const token = authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            error: 'Token inválido'
        });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Token invalido'
        })
    }


}