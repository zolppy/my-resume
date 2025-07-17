import { v4 as uuid } from "uuid";
import { Experience } from "@/utils/types/experience";

const experiences: Experience[] = [
  {
    id: uuid(),
    title: "Desenvolvedor Frontend",
    company: "Eruda",
    date: "Oct 2023 - Apr 2025",
    description:
      "Development and maintenance of modern, fluid, accessible, dynamic, performant and responsive user interfaces, using cutting-edge technologies and following high-fidelity models.",
  },
  {
    id: uuid(),
    title: "Artificial Intelligence and Machine Learning Intern",
    company: "Compass UOL",
    date: "Oct 2024 - Mar 2025",
    description:
      "Extensive learning path covering several theoretical topics relevant to the area of Artificial Intelligence (e.g. Natural Language Processing, Artificial Neural Networks, Deep Learning) and AWS Cloud Computing, with real and practical projects. Artificial Intelligence models have been implemented for various purposes, such as chatbots and optical character recognition.",
  },
  {
    id: uuid(),
    title: "Technical Support and Integration",
    company: "Infotec Automação e Tecnologia",
    date: "Nov 2022 - Apr 2023",
    description:
      "Assembly, maintenance and configuration of computers and peripherals and integration between systems, including network and database configuration.",
  },
  {
    id: uuid(),
    title: "Programa Institucional de Bolsas de Iniciação Científica",
    company: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    date: "Nov 2020 - May 2022",
    description:
      "Preparation of lesson plans, teaching materials, pedagogical resources and other activities related to teaching, in addition to teaching workshops in the area of Computer Science.",
  },
];

export { experiences };
