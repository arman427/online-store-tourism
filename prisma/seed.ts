import { prisma } from "@/lib/prisma";

async function insert() {
   await prisma.tours.createMany({
      data: [
         {
            id: 1,
            title: "Египет: Шарм-эль-Шейх",
            price: 45000,
            date: new Date("2026-03-15"),
            imageUrl: "https://via.placeholder.com/800x600/1e88e5/ffffff?text=Egipet"
         },
         {
            id: 2,
            title: "Турция: Анталия",
            price: 38000,
            date: new Date("2026-03-20"),
            imageUrl: "https://via.placeholder.com/800x600/e53935/ffffff?text=Turciya"
         },
         {
            id: 3,
            title: "ОАЭ: Дубай",
            price: 85000,
            date: new Date("2026-04-01"),
            imageUrl: "https://via.placeholder.com/800x600/fdd835/000000?text=Dubai"
         },
         {
            id: 4,
            title: "Таиланд: Пхукет",
            price: 72000,
            date: new Date("2026-03-25"),
            imageUrl: "https://via.placeholder.com/800x600/43a047/ffffff?text=Tailand"
         },
         {
            id: 5,
            title: "Мальдивы",
            price: 125000,
            date: new Date("2026-04-10"),
            imageUrl: "https://via.placeholder.com/800x600/00acc1/ffffff?text=Maldivy"
         },
         {
            id: 6,
            title: "Греция: Крит",
            price: 55000,
            date: new Date("2026-05-01"),
            imageUrl: "https://via.placeholder.com/800x600/3949ab/ffffff?text=Greciya"
         },
         {
            id: 7,
            title: "Италия: Рим и Флоренция",
            price: 95000,
            date: new Date("2026-04-15"),
            imageUrl: "https://via.placeholder.com/800x600/8e24aa/ffffff?text=Italiya"
         },
         {
            id: 8,
            title: "Испания: Барселона",
            price: 68000,
            date: new Date("2026-05-05"),
            imageUrl: "https://via.placeholder.com/800x600/fb8c00/ffffff?text=Ispaniya"
         },
         {
            id: 9,
            title: "Кипр: Айя-Напа",
            price: 48000,
            date: new Date("2026-06-01"),
            imageUrl: "https://via.placeholder.com/800x600/00897b/ffffff?text=Kipr"
         },
         {
            id: 10,
            title: "Черногория: Будва",
            price: 42000,
            date: new Date("2026-06-10"),
            imageUrl: "https://via.placeholder.com/800x600/5e35b1/ffffff?text=Chernogoriya"
         },
         {
            id: 11,
            title: "Вьетнам: Нячанг",
            price: 65000,
            date: new Date("2026-05-20"),
            imageUrl: "https://via.placeholder.com/800x600/c62828/ffffff?text=Vietnam"
         },
         {
            id: 12,
            title: "Грузия: Тбилиси и Батуми",
            price: 35000,
            date: new Date("2026-04-25"),
            imageUrl: "https://via.placeholder.com/800x600/6d4c41/ffffff?text=Gruziya"
         },
         {
            id: 13,
            title: "Франция: Париж",
            price: 78000,
            date: new Date("2026-05-10"),
            imageUrl: "https://via.placeholder.com/800x600/283593/ffffff?text=Paris"
         },
         {
            id: 14,
            title: "США: Сан-Франциско",
            price: 145000,
            date: new Date("2026-06-15"),
            imageUrl: "https://via.placeholder.com/800x600/d32f2f/ffffff?text=San-Francisco"
         },
         {
            id: 15,
            title: "ОАЭ: Дубай (VIP)",
            price: 120000,
            date: new Date("2026-04-20"),
            imageUrl: "https://via.placeholder.com/800x600/f57c00/ffffff?text=Dubai-VIP"
         },
         {
            id: 16,
            title: "Индонезия: Бали",
            price: 82000,
            date: new Date("2026-05-25"),
            imageUrl: "https://via.placeholder.com/800x600/388e3c/ffffff?text=Bali"
         }
      ]
   })
}


async function clear() {
   await prisma.$executeRaw`TRUNCATE TABLE "Tours" RESTART IDENTITY CASCADE`
}


async function main() {
   try {
      await clear()
      await insert()
      console.log("Данные успешно добавлены в базу данных.")
   } catch (error) {
      console.error("Ошибка при добавлении данных в базу данных:", error)
   }
}


main().then(async () => {
   await prisma.$disconnect()
}).catch(async (e) => {
   console.error(e)
   await prisma.$disconnect()
   process.exit(1)
})