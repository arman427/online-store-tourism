import { Header } from "@/components";
import { ReactNode } from "react";



export default function HomeLayout({ children }: { children: ReactNode }) {
   return (
      <main>
         <Header />
         {children}
      </main>
   )
}  