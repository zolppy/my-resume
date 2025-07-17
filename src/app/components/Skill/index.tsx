import { Skill as SkillType } from "@/utils/types/skill";

export function Skill({ title, rate }: Omit<SkillType, "id">) {
  return (
    <li className="flex flex-col gap-y-1">
      <span className="text-[0.9rem] text-[#333]">{title}</span>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#2563ab] h-2.5 rounded-full"
          style={{ width: `${rate}%` }}
        ></div>
      </div>
    </li>
  );
}

Skill.displayName = "Skill";
