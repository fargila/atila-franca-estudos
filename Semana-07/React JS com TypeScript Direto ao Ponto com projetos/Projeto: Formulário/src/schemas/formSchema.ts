import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(3, "O número mínimo de caracteres é 3."),
    lastName: z.string().min(3, "O número mínimo de caracteres é 3."),
    gender: z.string().refine((field) => field !== 'select', { message: 'Você precisa escolher um gênero' }),
    email: z.string().min(1, "O campo é obrigatório.").email('Uitilize um e-mail válido.'),
    password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
    confirmPassword: z.string().min(8, "A confirmação precisa ter no mínimo 8 caracteres."),
    agree: z.boolean().refine((field) => field === true, { message: "Você precisa concordar com os termos de uso." }),

}).refine((field) => field.password === field.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"]
})

export type FormSchema = z.infer<typeof formSchema>