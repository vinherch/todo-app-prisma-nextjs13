"use server";

import { compare } from "@/utils/passwordHelper";
import { cookies } from "next/headers";
import { signJWT } from "@/utils/jwtHelper";
import { redirect } from "next/navigation";
import { validateEmail } from "@/utils/formValidation";

//Server Actions

//Handle Form Data - Login Form
export const handleFormData = async (state: any, formData: FormData) => {
  const mail = formData.get("email");
  const passwd = formData.get("password");
  if (mail?.length === 0) return { error: true, message: "E-mail is required" };
  if (passwd?.length === 0) return { error: true, message: "Password is required" };
  //Fetch user from api
  const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/?email=${mail}`, {
    cache: "no-store",
  });
  if (response.ok) {
    //Get userdata from reponse
    const user = await response.json();
    //Check user password
    const passwordMatch = await compare(passwd!.toString(), user.password);
    if (!passwordMatch) return { error: true, message: "Wrong e-mail or password" };
    //Create JWT
    const token = await signJWT({ id: user.id, email: user.email }, { exp: process.env.TOKEN_EXPIRES! });
    cookies().set("auth-token", token);
    redirect("/home");
  }
  return { error: true, message: "Wrong e-mail or password" };
};

//Delete JWT - Logout
export const deleteCookie = async (name: string) => {
  cookies().delete(name);
  redirect("/");
};

export const handlePasswordReset = async (state: any, formData: FormData) => {
  //Get form data / Validation
  const email: FormDataEntryValue = formData.get("email") || "";
  const validated = validateEmail(email.toString());
  validated.success && redirect("/");

  //Action Password Reset - TODO
};
