import z from "zod";

export const signupSchema = z.object({
    name:z.string({message:'Nome é obrigatorio'}).min(3,'Nome deve ter pelo menos 3 caracteres'),
    email:z.email('Email inválido'),
    password:z.string({message:'Senha obrigatoria'}).min(6, 'A senha deve ter no minimo 6 caracteres')
})