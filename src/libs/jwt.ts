import jwt, { type JwtPayload } from 'jsonwebtoken';

export const createToken = (id: number, email: string) => {
    return jwt.sign(
        {
            id,
            email
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: '7d'
        }
    )
}

export const verifyToken = (token: string) => {
    return jwt.verify(
        token,
        process.env.JWT_SECRET as string
    ) as JwtPayload & {
        id: number;
        email: string;
    }
}