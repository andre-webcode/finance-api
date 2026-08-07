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
        where: {
            userId
        }
    });

    return revenues;
}

type UpdateProps = {
    id: number;
    userId: number;
    description: string;
    value: number;
    category: string;
    date: Date;
}
export const updateRevenue = async ({ id, userId, description, value, category, date }: UpdateProps) => {
    const revenue = await prisma.revenue.findUnique({
        where: {
            id
        }
    });

    if (!revenue) {
        throw new Error("Receita não encontrada");
    }

    if (revenue.userId !== userId) {
        throw new Error("sem permissão")
    }

    const updateRevenue = await prisma.revenue.update({
        where: {
            id
        },
        data: {
            description,
            value,
            category,
            date
        }
    });

    return updateRevenue;
}

export const deleteRevenue = async (id: number, userId: number) => {
    const revenue = await prisma.revenue.findUnique({
        where: {
            id
        }
    });

    if (!revenue) {
        throw new Error("Receita não encontrada");
    }

    if (revenue.userId !== userId) {
        throw new Error("sem permissão")
    }

    const deletedRevenue = await prisma.revenue.delete({
        where: {
            id
        }
    });

    return deletedRevenue;

}