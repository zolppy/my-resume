import { v4 as uuid } from "uuid";
import { Skill } from "@/utils/types/skill";

const skills: Skill[] = [
  { id: uuid(), title: "Artificial Neural Networks", rate: 85 },
  { id: uuid(), title: "AWS Cloud Computing", rate: 78 },
  { id: uuid(), title: "Docker", rate: 82 },
  { id: uuid(), title: "Express.js", rate: 89 },
  { id: uuid(), title: "FastAPI", rate: 83 },
  { id: uuid(), title: "Git", rate: 91 },
  { id: uuid(), title: "LangChain", rate: 79 },
  { id: uuid(), title: "Machine Learning", rate: 87 },
  { id: uuid(), title: "Natural Language Processing", rate: 84 },
  { id: uuid(), title: "Next.js", rate: 92 },
  { id: uuid(), title: "Prompt Engineering", rate: 88 },
  { id: uuid(), title: "Python", rate: 94 },
  { id: uuid(), title: "React Testing Library", rate: 81 },
  { id: uuid(), title: "React.js", rate: 93 },
  { id: uuid(), title: "Scrum", rate: 77 },
  { id: uuid(), title: "Tailwind CSS", rate: 95 },
  { id: uuid(), title: "TypeScript", rate: 90 },
];

export { skills };
