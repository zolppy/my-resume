import { v4 as uuid } from "uuid";
import type { Achievement } from "@/utils/types/achievement";

const achievements: Achievement[] = [
  { id: uuid(), title: "Gen AI Technical Certified" },
  { id: uuid(), title: "AI-Assisted Certified Professional" },
  { id: uuid(), title: "Agile-Certified Fast Inception with AI Cockpit" },
];

export { achievements };
