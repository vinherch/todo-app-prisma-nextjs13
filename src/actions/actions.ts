"use server";

import { compare, hashPassword } from "@/utils/passwordHelper";
import { cookies } from "next/headers";
import { signJWT, verifyJWT } from "@/utils/jwtHelper";
import { redirect } from "next/navigation";
import prisma from "@/db/prismaClient";
import { validateEmail, validateNewUser, validateTodo, validateLoginUser } from "@/utils/formValidation";

//Server Actions

//Login User
export const loginUser = async (state: any, formData: FormData) => {
  //Get Form Data
  const email = formData.get("email") || "";
  const password = formData.get("password") || "";
  const validated = validateLoginUser(email?.toString(), password?.toString());
  //Validation Form Data
  if (validated.success) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: validated.data.email,
        },
      });
      //Check if user exists
      if (!user) return { error: true, message: "Wrong username or password" };
      //Check user password
      const passwordMatch = await compare(validated.data.password, user.password);
      if (!passwordMatch) return { error: true, message: "Wrong e-mail or password" };
      //Create JWT
      const token = await signJWT({ id: user.id, email: user.email }, { exp: process.env.TOKEN_EXPIRES! });
      cookies().set("auth-token", token);
    } catch (error) {
      return { error: true, message: "User login failed" };
    }
    //Authentication successfull - redirect to /home
    redirect("/home");
  }
  return { error: true, message: validated.error.message };
};

//Delete JWT - Logout
export const deleteCookie = async (name: string) => {
  cookies().delete(name);
  redirect("/");
};

//User Password Reset
export const handlePasswordReset = async (state: any, formData: FormData) => {
  //Get form data / Validation
  const email: FormDataEntryValue = formData.get("email") || "";
  const validated = validateEmail(email.toString());
  validated.success && redirect("/");

  //TODO - Action Password Reset
};

//Create new User
export const createAccount = async (state: any, formData: FormData) => {
  //Get Form Data - New User
  const email: FormDataEntryValue = formData.get("email") || "";
  const firstname: FormDataEntryValue = formData.get("firstname") || "";
  const lastname: FormDataEntryValue = formData.get("lastname") || "";
  const password: FormDataEntryValue = formData.get("password") || "";
  const validated = validateNewUser({ email: email.toString(), firstname: firstname.toString(), lastname: lastname.toString(), password: password.toString() });
  //Validation - Form Data
  if (validated.success) {
    //Check if user / email alread exists
    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: validated.data.email,
        },
      });
      if (existingUser) return { error: true, message: `Email ${email} is already registered.` };
      const newUser = await prisma.user.create({
        data: {
          email: validated.data.email,
          firstname: validated.data.firstname,
          lastname: validated.data.lastname,
          password: await hashPassword(validated.data.password),
        },
      });
      //Create JWT
      const token = await signJWT({ id: newUser.id, email }, { exp: process.env.TOKEN_EXPIRES! });
      cookies().set("auth-token", token);
    } catch (error) {
      console.log(error);
      return { error: true, message: "User creation failed" };
    }
    redirect("/home");
  }
  return { error: true, message: validated.error };
};

//Get user data from cookie
export const getLoggedInUser = async () => {
  const jwt = cookies().get("auth-token");
  const user = await verifyJWT(jwt!.value);
  //Get user
  const responseUserData = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/${user!.id}`);
  return await responseUserData.json();
};

//Create new Todo
export const createNewTodo = async (state: any, formData: FormData) => {
  //Get Form Data
  const title = formData.get("title") || "";
  const description = formData.get("description") || "";
  //Validate Form Data
  const validated = validateTodo({ title, description });
  if (validated.success) {
    const user = await getLoggedInUser();
    try {
      const created = await prisma.todo.create({
        data: {
          userId: user.id,
          title: validated.data.title,
          description: validated.data.description,
          checked: false,
        },
      });
    } catch (error) {
      return { error: true, message: "Todo creation failed" };
    }
    redirect("/home");
  }
  return { error: true, message: validated.error.message };
};
