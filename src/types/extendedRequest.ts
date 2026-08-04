import type { Request } from "express"

export type ExtendedRequest = Request & {
    user?: {
        id: number;
        email: string;
    }
}
