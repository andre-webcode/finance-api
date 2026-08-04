import type { Request, Response } from "express";
import { authUser, createUser } from "../services/user.js";
import { signupSchema } from "../schemas/signup-schema.js";
import z from "zod";
import { signinSchema } from "../schemas/signin-schema.js";

export const signup = async (req: Request, res: Response) => {
    const data = signupSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            error: z.flattenError(data.error).fieldErrors
        })
    }

    try {
        const user = await createUser(
            data.data.name,
            data.data.email,
            data.data.password
        );

        return res.status(201).json(user);
        
    } catch (error) {
        return res.status(400).json({
            error: error instanceof Error
                ? error.message : 'Erro interno'
        })
    }
}

export const signin = async (req:Request, res:Response) => {
    const data = signinSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            error: z.flattenError(data.error).fieldErrors
        })
    }
    
    const user = await authUser(data.data)
    if(!user){
        res.json({error:'Acesso negado'})
        return;
        
    }

    return res.status(200).json(user);

}