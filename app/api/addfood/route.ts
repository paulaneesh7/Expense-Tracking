import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



async function createFoodTransaction(request: NextRequest){
    const { name, price, dateTime, description, selectedOption } = await request.json();

    try {
        const newFoodTransaction = await prisma.foodExpense.create({
            data: {
                name,
                price,
                dateTime,
                description,
                selectedOption
            }
        })

        return NextResponse.json({ data: newFoodTransaction }, { status: 201 });
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export { createFoodTransaction as POST };