import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

async function createTransaction(request: NextRequest) {
  const { name, price, dateTime, description, selectedOption } =
    await request.json();

  try {
    const newTransaction = await prisma.transaction.create({
      data: {
        name,
        price,
        dateTime,
        description,
        selectedOption,
      },
    });
    return NextResponse.json({ data: newTransaction }, { status: 201 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export { createTransaction as POST };
