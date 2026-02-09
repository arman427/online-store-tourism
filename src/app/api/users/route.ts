import { db } from "@/lib/db";
import { formSubmissions } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET() {
   const users = await db.select().from(formSubmissions);
   return NextResponse.json(users);
}