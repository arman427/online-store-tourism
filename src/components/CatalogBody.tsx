import { CatalogFilters } from "./CatalogFilters";
import { Container } from "./container";
import { TourItem } from "./TourItem";
import { Tours } from "@/generated/prisma/client";

export async function CatalogBody({ tours }: { tours: Tours[] }) {

   return (
      <Container className="my-20">
         <div className="flex gap-20">
            {/* Фильтры */}
            <div className="w-80">
               <CatalogFilters />
            </div>

            {/* Список туров */}
            <div className="grid grid-cols-3 gap-5">
               {tours.map((tour) => (
                  <TourItem
                     key={tour.id}
                     item={tour}
                  />
               ))}
            </div>
         </div>
      </Container>
   )
}
