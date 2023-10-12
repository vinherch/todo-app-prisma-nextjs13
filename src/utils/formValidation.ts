import { z } from "Zod";

export const validateTodo = (todo: { title: any; description: any }) => {
  return z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
    })
    .safeParse(todo);
};
