import { v4 as uuid } from "uuid";
import { Education } from "@/utils/types/education";

const educations: Education[] = [
  {
    id: uuid(),
    title: "Computer Science",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
    date: "2019 - Now",
  },
];

export { educations };
