import { Language as LanguageType } from "@/utils/types/language";

export function Language({ title }: Omit<LanguageType, "id">) {
  return <li>{title}</li>;
}

Language.displayName = "Language";
