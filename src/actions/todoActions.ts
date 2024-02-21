"use server";

import { validateTodo } from "@/utils/formValidation";
import { getLoggedInUser } from "./actions";
import { redirect } from "next/navigation";

//Server Actions Todo's

//Handle Form Data - Login Form
export const createNewTodo = async (state: any, formData: FormData) => {
  //Get Form Data
  const title = formData.get("title") || "";
  const description = formData.get("description") || "";

  //Validate Form Data
  const validated = validateTodo({ title, description });

  if (validated.success) {
    //Get User ID
    const user = await getLoggedInUser();
    //Fetch user todo's
    const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/todos/`, {
      method: "POST",
      body: JSON.stringify({ userId: user!.id, title, description, checked: false }),
    });
    if (!response.ok) {
      return { error: true, message: "Todo creation failed" };
    }
    redirect("/home");
  }
  return { error: true, message: validated.error };
};
