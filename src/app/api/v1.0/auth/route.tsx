import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

//Find user by email
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
};
