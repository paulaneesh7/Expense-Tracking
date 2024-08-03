import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


async function fetchTransactions(request: NextRequest) {
  try {
    const transactions = await prisma.transaction.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return NextResponse.json({ data: transactions }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export { fetchTransactions as GET };