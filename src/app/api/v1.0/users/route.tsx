import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

//Get all users / Get user by e-mail
export const GET = async (req: NextRequest, res: NextResponse) => {
  const { searchParams } = new URL(req.url);
  const email: string | null = searchParams.get("email");
  if (email) {
    try {
      const data = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (!data) return NextResponse.json({ msg: "Not Found" }, { status: 404 });
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  }
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const { email, password, firstname, lastname } = await req.json();
  //Create password salt
  //TODO
  try {
    const created = await prisma.user.create({
      data: {
        email,
        firstname,
        lastname,
        password,
      },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
