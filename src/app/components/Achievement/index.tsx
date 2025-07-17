import { Achievement as AchievementType } from "@/utils/types/achievement";

export function Achievement({ title }: Omit<AchievementType, "id">) {
  return <li>{title}</li>;
}

Achievement.displayName = "Achievement";
