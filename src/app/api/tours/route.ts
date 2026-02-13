import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
   const tours = await prisma.tours.findMany()

   return NextResponse.json(tours)
}