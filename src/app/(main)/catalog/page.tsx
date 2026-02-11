import { CatalogBody } from "@/components";
import { db } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { tours } from "@/lib/schema";

export default async function CatalogPage() {
   const toursData = await db.select().from(tours);

   return (
      <>
         <CatalogBody
            tours={toursData}
         />
      </>
   )
}