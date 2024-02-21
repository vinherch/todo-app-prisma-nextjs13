import prisma from "@/db/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  //Get all todos / Get todos by user id
  const { searchParams } = new URL(req.url);
  const user: string | null = searchParams.get("user");
  if (user) {
    try {
      const data = await prisma.todo.findMany({
        where: {
          userId: Number.parseFloat(user),
        },
      });
      if (!data) return NextResponse.json({ msg: "Not Found" }, { status: 404 });
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  }
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
