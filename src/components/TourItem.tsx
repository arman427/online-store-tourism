import { PAGES } from "@/config/pages-config";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Tours } from "@/lib/schema";


export function TourItem({ item }: { item: any }) {
   const formattedDate = format(new Date(item.date), 'dd MMMM yyyy', { locale: ru });
   return (
      <div className="w-65 transition-all will-change-transform backface-hidden shadow-xl shadow-black/5">
         <Link href={PAGES.PRODUCTS(item.id)}>
            <div className="w-full relative h-50">
               <Image
                  src={item.}
                  alt={item.title}
                  fill
                  sizes="500px"
                  className="object-cover"
                  quality={70}
               />
            </div>

            <div className="p-4">
               <div className="flex items-center justify-between">
                  <span className="text-[20px] font-bold">{item.price} ₽</span>
                  <span className="py-0.5 px-1 bg-green-100 rounded-lg text-[12px] text-emerald-700">{item.rating}</span>
               </div>

               <div className="text-[12px] font-semibold">
                  <span>{formattedDate}</span>
               </div>

               <div className="flex items-end gap-1 mb-4">
                  <MapPin size={16} className="text-gray-400 shrink-0" />
                  <span className="text-[13px] leading-none">{item.title}</span>
               </div>

               <button className="btn py-2 px-6 bg-accent transition-colors hover:bg-foreground text-background">В корзину</button>
            </div>
         </Link>
      </div>
   )
}