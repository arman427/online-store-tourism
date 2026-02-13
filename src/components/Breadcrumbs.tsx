'use client';

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { getBreadcrumbs } from "@/utils";

export function Breadcrumbs() {
   const pathname = usePathname();
   const HEADER_LINKS = getBreadcrumbs(pathname);

   return (
      <Breadcrumb>
         <BreadcrumbList>
            {
               HEADER_LINKS.map((breadcrumb, index) => (
                  <div className="flex items-center gap-1 text-[13px]" key={index}>
                     <BreadcrumbItem>
                        <span>{breadcrumb.text}</span>
                     </BreadcrumbItem>

                     {index !== HEADER_LINKS.length - 1 && <BreadcrumbSeparator />}
                  </div>
               ))
            }
         </BreadcrumbList>
      </Breadcrumb>
   )
}