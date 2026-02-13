import { db } from "@/lib/db";
import { tours } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      const data = await db.select().from(tours)
      return NextResponse.json(data)
   } catch (error) {
      return NextResponse.error()
   }
}