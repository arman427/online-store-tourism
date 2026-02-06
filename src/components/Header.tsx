<<<<<<< HEAD
import { CONTACTS_DATA } from "@/constants/header-links";
import { Container } from "./container";
import { Facebook, Twitter } from "lucide-react";

export function Header() {
   return (
      <header>
         <Container>
            <div className="flex gap-8 items-center">
               {CONTACTS_DATA.map(({ icon: Icon, text: text, id }) => (
                  <a href="#" key={id} className="flex gap-2 text-[#999999] items-stretch text-[13px] hover:text-foreground transition-colors py-2">
                     <Icon size={15} className="shrink-0" />
                     <span>{text}</span>
                  </a>
               ))}
            </div>

            <div>
               <a href="">
                  <Facebook />
               </a>
               <a href="">
                  <Twitter />
               </a>
            </div>
         </Container>
=======
'use client';
import { CONTACTS_DATA } from "@/constants/header-links";
import { Container } from "./container";
import Link from "next/link";

export function Header() {


   return (
      <header>
         <div className="border-b border-gray-200">
            <Container className="flex items-center justify-between py-2">
               <div className="flex gap-8 items-center">
                  {CONTACTS_DATA.map(({ icon: Icon, text: text, id }) => (
                     <a href="#" key={id} className="flex gap-2 text-[#999999] items-stretch text-[13px] hover:text-foreground transition-colors py-2">
                        <Icon size={15} className="shrink-0" />
                        <span>{text}</span>
                     </a>
                  ))}
               </div>

               <div className="flex gap-6 items-center">
                  <a href="" className="text-[#999999] transition-colors hover:text-foreground">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                     </svg>
                  </a>
                  <a href="" className="text-[#999999] transition-colors hover:text-foreground">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                     </svg>
                  </a>
                  <a href="" className="text-[#999999] transition-colors hover:text-foreground">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                     </svg>
                  </a>
               </div>
            </Container>
         </div>
         <div>
            <Container className="flex items-center justify-between">
               <Link href="/" className="text-3xl font-bold uppercase transition-transform hover:-rotate-3 py-2">
                  Terra Travel
               </Link>

               <nav className="flex items-center">
                  <Link href="/" className={`text-[15px] py-6 px-4 transition-colors hover:bg-link-hover hover:text-accent`}>
                     Главная
                  </Link>
                  <Link href="/about" className="text-[15px] py-6 px-4 transition-colors hover:bg-link-hover hover:text-accent">
                     О нас
                  </Link>
                  <Link href="/catalog" className="text-[15px] py-6 px-4 transition-colors hover:bg-link-hover hover:text-accent">
                     Каталог
                  </Link>
               </nav>

               <button className="text-[15px] bg-link-hover py-6 px-10 transition-colors hover:bg-foreground hover:text-background">
                  Войти
               </button>
            </Container>
         </div>
>>>>>>> a4b925b (commit)
      </header>
   )
}