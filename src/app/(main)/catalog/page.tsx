import { CatalogBody } from "@/components";
import { prisma } from "@/lib/prisma";

export default async function CatalogPage() {
   const tours = await prisma.tours.findMany();

   return (
      <>
         <CatalogBody
            tours={tours}
         />
      </>
   )
}