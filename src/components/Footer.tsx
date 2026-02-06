'use client'

import { FOOTER_LINKS } from "@/constants/footer-links";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_PAYMENT } from "@/constants/footer-payment-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { SOCIALS } from "@/constants/footer-socials-data";

export function Footer() {
   return (
      <footer className="pt-15 pb-3 bg-foreground text-background">
         <Container>
            <div className="flex items-start justify-between border-b border-white/10 pb-10">
               <nav className="flex gap-15 text-[14px] text-[#848c97]">
                  {FOOTER_LINKS.map((section, index) => (
                     <ul key={index} className="flex flex-col gap-2">
                        <h4 className="mb-3 text-[15px] text-background">{section.title}</h4>
                        {section.links.map((link) => (
                           <li key={link.label} className="transition-colors hover:text-background">
                              <a href={link.href}>{link.label}</a>
                           </li>
                        ))}
                     </ul>
                  ))}
               </nav>

               <div className="grid gap-2 text-[14px] text-[#848c97]">
                  <div className="grid gap-1">
                     <p>Адрес: г. Волгоград, ул. Пушкина д.666</p>
                     <p>Телефон: +7 (961) 059 92-62</p>
                     <p>Email: babayananuta11@gmail.com</p>
                     <p>Режим работы: Пн-Пт: 10:00 – 19:00, Сб-Вс: по записи</p>
                  </div>

                  <span className="mt-3">Наши соц. сети</span>
                  <TooltipProvider>
                     <div className="flex gap-6 items-center">
                        {
                           SOCIALS.map((social) => (
                              <Tooltip key={social.name}>
                                 <TooltipTrigger>
                                    <a href="" className="relative text-background transition-all group">
                                       <Image
                                          src={social.imageUrl}
                                          alt={social.name}
                                          width={22}
                                          height={22}
                                          className="brightness-0 invert"
                                       />
                                    </a>
                                 </TooltipTrigger>
                                 <TooltipContent side="bottom">
                                    <p className="">{social.name}</p>
                                 </TooltipContent>
                              </Tooltip>
                           ))
                        }
                     </div>
                  </TooltipProvider>
               </div>
            </div>


            <div className="pt-5">
               <div className="flex items-center justify-between mb-10">
                  <Link
                     href="/"
                     className="text-3xl font-bold uppercase transition-transform hover:-rotate-3 py-2"
                  >
                     Terra Travel
                  </Link>

                  <div className="flex gap-5">
                     {FOOTER_PAYMENT.map((icon) => (
                        <Image
                           key={icon.url}
                           src={icon.url}
                           alt={icon.name}
                           width={55}
                           height={55}
                        />
                     ))}
                  </div>
               </div>

               <div className="flex items-center justify-between text-[#848c97] text-[14px]">
                  <p>@ 2026 Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <p>Интернет-магазин создан на <span className="text-accent">Next.js</span></p>
               </div>
            </div>
         </Container>
      </footer>
   )
}