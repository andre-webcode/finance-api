import { prisma } from "../libs/prisma.js";

type Props = {
    description: string;
    value: number;
    category: string;
    date: Date;
    userId: number;
}
export const createExpense = async ({ description, value, category, date, userId }: Props) => {
    const expense = await prisma.expense.create({
        data: {
            description,
            value,
            category,
            date,
            userId
        }
    });

    return expense;
}

export const getExpenses = async (userId: number) => {
    const expenses = await prisma.expense.findMany({
        where: {
            userId
        }
    });

    return expenses;
}

type UpdateProps = {
    id: number;
    userId: number;
    description: string;
    value: number;
    category: string;
    date: Date;
}
export const updateExpense = async ({id, userId, description, value, category, date}:UpdateProps) => {
    const expense = await prisma.expense.findUnique({
        where: {
            id
        }
    });

    if(!expense){
        throw new Error("Despesa não encontrada");
    }

    if(expense.userId !== userId){
        throw new Error("Sem permissão");
    }

    const updateExpense = await prisma.expense.update({
        where:{
            id
        },
        data:{
            description,
            value,
            category,
            date
        }
    });

    return updateExpense;
}


export const deleteExpense = async (id:number, userId:number) => {
    const expense = await prisma.expense.findUnique({
        where:{
            id
        }
    });

    if(!expense){
        throw new Error("Despesa não encontrada");
    }

    if(expense.userId !== userId){
        throw new Error("Sem permissão");
    }

    const removeExpense = await prisma.expense.delete({
        where:{
            id
        }
    });

    return removeExpense;
}