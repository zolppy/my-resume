import { Language as LanguageType } from "@/utils/types/language";

export function Language({ title }: Omit<LanguageType, "id">) {
  return <li className="mb-1">{title}</li>;
}

Language.displayName = "Language";
