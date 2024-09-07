import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const foodTransactions = await prisma.foodExpense.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ data: foodTransactions }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
