'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

export function SwiperWrapper() {
   return (
      <Swiper
         className="mySwiper w-full h-screen"
         navigation={true}
         pagination={true}
         modules={[Navigation, Pagination, Autoplay]}
         slidesPerView={1}
         effect="slide"
         loop={true}
         speed={800}
         autoplay={{
            delay: 8000,
            disableOnInteraction: false,
         }}
      >
         <SwiperSlide>
            <div className="relative w-full h-full">
               <Image
                  src='/pariz.jpg'
                  alt='Paris'
                  width={1920}
                  height={1080}
                  className="slider-img object-cover "
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <Image
               src='/tailand.jpeg'
               alt='London'
               width={1920}
               height={1080}
               className="slider-img"
            />
         </SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
   )
}