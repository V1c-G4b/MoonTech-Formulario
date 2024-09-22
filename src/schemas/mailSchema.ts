// src/schemas/mailSchema.ts
import { z } from "zod";

export const mailSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(10, "O telefone deve ter pelo menos 10 dígitos")
    .regex(/^\d+$/, "O telefone deve conter apenas números"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});
