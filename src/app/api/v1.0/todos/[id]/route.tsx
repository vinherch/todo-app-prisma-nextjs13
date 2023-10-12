import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    const data = await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const PUT = async (req: NextRequest, { params: { id } }: Props) => {
  const { userId, title, description, checked } = await req.json();
  console.log(description, title);
  try {
    const updated = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        userId,
        title,
        description,
        checked,
      },
    });
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params: { id } }: Props) => {
  const prisma = new PrismaClient();
  try {
    const data = await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
