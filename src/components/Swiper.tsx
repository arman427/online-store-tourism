'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

import Image from "next/image"
import { SLIDES } from "@/constants/slides-data"
import { Button } from "./ui/Button"

export function SwiperWrapper() {
   return (
      <Swiper
         className="mySwiper w-full h-200"
         navigation={true}
         pagination={true}
         modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Keyboard]}
         slidesPerView={1}
         keyboard={true}
         effect="coverflow"
         loop={true}
         speed={800}
         autoplay={{
            delay: 8000,
            disableOnInteraction: false,
         }}
      >
         {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
               <div className="relative flex w-full h-full items-center justify-start">
                  <Image
                     src={slide.img}
                     alt={slide.title}
                     fill
                     className="slider-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
                  <div className="absolute left-80 top-50 bg-white/30 max-w-2xl h-fit flex flex-col gap-10 text-left backdrop-blur-sm shadow-md shadow-black/20 p-6">
                     <div>
                        <h3 className="uppercase text-4xl font-bold mb-3">{slide.title}</h3>
                        <p className="max-w-150">{slide.desc}</p>
                     </div>
                     <div>
                        <button className="bg-accent py-5 px-10 uppercase font-semibold duration-300 ease hover:bg-foreground hover:text-background">Узнать больше</button>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}