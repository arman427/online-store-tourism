import { Hero, Popular, Services, SwiperWrapper } from "@/components";

export default function HomePage() {
   return (
      <div>
         <SwiperWrapper />
         <Hero />
         <Services />
         <Popular />
      </div>
   )
}