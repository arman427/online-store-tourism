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
      </header>
   )
}