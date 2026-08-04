import type { Request, Response } from "express"
import type { ExtendedRequest } from "../types/extendedRequest.js"

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

