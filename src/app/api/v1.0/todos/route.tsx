import prisma from "@/db/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await prisma.todo.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const { userId, title, description, checked } = await req.json();
  try {
    const created = await prisma.todo.create({
      data: {
        userId,
        title,
        description,
        checked,
      },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
