import { prisma } from "../libs/prisma.js";
import bcrypt from 'bcrypt';


export const createUser = async (name: string, email: string, password: string) => {
    email = email.toLowerCase();

    const userExists = await prisma.user.findUnique({
        where: { email }
    });

    if (userExists) {
        throw new Error('Email já cadastrado');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email, password: passwordHash },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    });

    return user;
}