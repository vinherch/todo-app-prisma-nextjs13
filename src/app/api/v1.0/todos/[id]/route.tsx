import prisma from "@/db/prismaClient";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    const data = await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (data) return NextResponse.json(data, { status: 200 });
    return NextResponse.json({ msg: "Not Found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const PUT = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    //Check if todo item does exist
    const data = await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!data) return NextResponse.json({ msg: "Not Found" }, { status: 404 });

    //Get data from json
    const { userId, title, description, checked } = await req.json();
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
  try {
    //Check if todo item does exist
    const data = await prisma.todo.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (!data) return NextResponse.json({ msg: "Not Found" }, { status: 404 });
    const deleted = await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
