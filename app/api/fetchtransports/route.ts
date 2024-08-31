import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const transportTransactions = await prisma.transport.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ data: transportTransactions }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
