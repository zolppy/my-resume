import { v4 as uuid } from "uuid";
import { Project } from "@/utils/types/project";

const projects: Project[] = [
  {
    id: uuid(),
    href: "https://br-architects-zol.vercel.app",
    title: "https://br-architects-zol.vercel.app",
  },
  {
    id: uuid(),
    href: "https://fashion-blog-zol.vercel.app",
    title: "https://fashion-blog-zol.vercel.app",
  },
  {
    id: uuid(),
    href: "https://interior-design-zol.vercel.app",
    title: "https://interior-design-zol.vercel.app",
  },
  {
    id: uuid(),
    href: "https://thin-crust-pizza.vercel.app",
    title: "https://thin-crust-pizza.vercel.app",
  },
  {
    id: uuid(),
    href: "https://travel-agency-zol.vercel.app",
    title: "https://travel-agency-zol.vercel.app",
  },
  {
    id: uuid(),
    href: "https://wizard-register.vercel.app",
    title: "https://wizard-register.vercel.app",
  },
];

export { projects };
