import Image from "next/image";
import { Container } from "./container";
import { Line } from "./ui/Line";

export function Testimonials() {
   return (
      <section className="py-18 bg-muted">
         <Container className="text-center">
            <h2 className="text-2xl font-semibold uppercase mb-15">Отзывы</h2>
            <p className="mb-5 font-extralight tracking-[0.4px]">В прошлом году ездили 3 раза. Сейчас вернулись из Египта, всё отлично. Наш любимый тур агент подобрала нам тур полностью в соответствии с нашими пожеланиями. Недорого и хорошо для нас капризных путешественников. Всё было оперативно, быстро, доброжелательно. Большое спасибо всем сотрудникам.</p>
            <Line className="w-10 h-0.5 mb-6" />
            <h3 className="text-[18px] font-bold">Максим Кузнецов</h3>
            <span className="italic text-[13px] mb-10">Путешественница</span>
            <Image
               src="testimonials/1.jpg"
               width={100}
               height={100}
               alt="Мария Иванова"
            />
         </Container>
      </section>
   )
}