import { z } from "Zod";

export const validateTodo = (todo: { title: any; description: any }) => {
  return z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
    })
    .safeParse(todo);
};

export const validateEmail = (email: string) => {
  return z.string().email().safeParse(email);
};

export const validateLoginUser = (email: string, password: string) => {
  return z
    .object({
      email: z.string().email().min(4),
      password: z.string().min(7).max(64),
    })
    .safeParse({ email, password });
};

export const validateNewUser = (user: { email: string; firstname: string; lastname: string; password: string }) => {
  return z
    .object({
      email: z.string().email().min(4),
      firstname: z.string(),
      lastname: z.string(),
      password: z.string().min(7).max(64),
    })
    .safeParse(user);
};
