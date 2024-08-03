import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Fetch a single transaction by id
async function fetchATransaction(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

   // convert the id to a number as we have id = Int in our schema 
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
    });
    
    if (!transaction) {
        return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
      }

    return NextResponse.json({data: transaction}, {status: 200});
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


// Update a transaction by id
async function updateTransaction(request: NextRequest, { params }: { params: { id: string } }){
    const id = parseInt(params.id, 10);
    
}


export { fetchATransaction as GET, updateTransaction as PUT };
