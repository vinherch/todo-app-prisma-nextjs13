"use server";

import { compare } from "@/utils/passwordHelper";
import { cookies } from "next/headers";
import { signJWT } from "@/utils/jwtHelper";
import { redirect } from "next/navigation";
import { validateEmail, validateNewUser } from "@/utils/formValidation";

//Server Actions

//Handle Form Data - Login Form
export const handleFormData = async (state: any, formData: FormData) => {
  const mail = formData.get("email");
  const password = formData.get("password");
  if (mail?.length === 0) return { error: true, message: "E-mail is required" };
  if (password?.length === 0) return { error: true, message: "Password is required" };
  //Fetch user from api
  const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/?email=${mail}`, {
    cache: "no-store",
  });
  if (response.ok) {
    //Get userdata from reponse
    const user = await response.json();
    //Check user password
    const passwordMatch = await compare(password!.toString(), user.password);
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

  //TODO - Action Password Reset
};

export const createAccount = async (state: any, formData: FormData) => {
  //Get Form Data - New User
  const email: FormDataEntryValue = formData.get("email") || "";
  const firstname: FormDataEntryValue = formData.get("firstname") || "";
  const lastname: FormDataEntryValue = formData.get("lastname") || "";
  const password: FormDataEntryValue = formData.get("password") || "";
  const validated = validateNewUser({ email: email.toString(), firstname: firstname.toString(), lastname: lastname.toString(), password: password.toString() });
  if (validated.success) {
    //Check if user / email alread exists
    const existingUser = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/?email=${email}`);
    if (existingUser.ok) return { error: true, message: `User ${email} already exists.` };
    const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/`, {
      method: "POST",
      body: JSON.stringify({ email, firstname, lastname, password }),
    });
    if (response.ok) {
      //Get userdata from reponse
      const user = await response.json();
      //Create JWT
      const token = await signJWT({ id: user.id, email }, { exp: process.env.TOKEN_EXPIRES! });
      cookies().set("auth-token", token);
      redirect("/home");
    }
    return { error: true, message: "User creation failed" };
  }
  return { error: true, message: validated.error };
};
