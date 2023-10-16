import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, res: NextResponse) => {
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
