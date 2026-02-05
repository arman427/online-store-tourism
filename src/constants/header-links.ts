import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACTS_DATA = [
   {
      id: 1,
      icon: Phone,
      text: '+7 (961) 059 92-62'
   },
   {
      id: 2,
      icon: MapPin,
      text: 'г. Москва, ул. Пушкинская, д. 1'
   },
   {
      id: 3,
      icon: Mail,
      text: 'babayananuta11@gmail.com'
   }
] as const;