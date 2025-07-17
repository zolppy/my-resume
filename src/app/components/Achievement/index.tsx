import { Achievement as AchievementType } from "@/utils/types/achievement";

export function Achievement({ title }: Omit<AchievementType, "id">) {
  return <li className="mb-1">{title}</li>;
}

Achievement.displayName = "Achievement";
