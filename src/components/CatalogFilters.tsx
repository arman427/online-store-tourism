import { FILTERS } from "@/constants";
import { Checkbox } from "./ui/checkbox";

export function CatalogFilters() {
   return (
      <div>
         {
            FILTERS.map((item, index) => (
               <div className="flex items-center gap-2" key={item.id}>
                  <Checkbox
                     key={index}
                     value={item.value}
                     className="mb-5"
                     id={`checkbox-${String(item.id)}-${String(item.value)}`}
                  />
                  <label
                     className="cursor-pointer"
                     htmlFor={`checkbox-${String(item.id)}-${String(item.value)}`}
                  >
                     {item.label}
                  </label>
               </div>
            ))
         }
      </div>
   )
}