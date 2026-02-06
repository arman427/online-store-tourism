import { Container } from "./container";

export function Hero() {
   return (
      <Container className="text-center py-20">
         <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5"></div>
         <h2 className="text-2xl font-semibold uppercase mb-5">Эта планета принадлежит вам</h2>
         <p className="text-[14px] mb-3">Курорт Приэльбрусье – один из самых известных на Кавказе и в России центров горнолыжного отдыха, альпинизма и туризма. Этот изумительно красивый горный край называют жемчужиной Кавказских гор. Здесь располагается самая высокая часть Кавказских гор и самые известные его вершины. Горные хребты, тянущиеся параллельно друг другу, прорезающие их грандиозные и красивейшие ущелья поражают туристов своей первозданной красотой и великолепием.</p>
         <button className="bg-accent py-3 px-10 text-background duration-200 hover:bg-foreground">Подробнее</button>
      </Container>
   )
}