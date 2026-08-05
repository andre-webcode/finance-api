import { prisma } from "../libs/prisma.js";

type Props = {
    description: string;
    value: number;
    category: string;
    date: Date;
    userId: number;
}

export const createRevenue = async ({ description, value, category, date, userId }: Props) => {
    const revenue = await prisma.revenue.create({
        data: {
            description,
            value,
            category,
            date,
            userId
        }
    })
    return revenue;
}

export const findUserRevenues = async (userId: number) => {
    const revenues = await prisma.revenue.findMany({
        where:{
            userId
        }
    });

    return revenues;
}