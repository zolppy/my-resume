import { v4 as uuid } from "uuid";
import { Language } from "@/utils/types/language";

const languages: Language[] = [
  { id: uuid(), title: "Portuguese (native)" },
  { id: uuid(), title: "English (advanced)" },
];

export { languages };
