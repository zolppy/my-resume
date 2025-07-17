import { Skill as SkillType } from "@/utils/types/skill";

export function Skill({ title, rate }: Omit<SkillType, "id">) {
  return (
    <li className="flex justify-between items-center">
      <span className="text-[0.9rem] text-[#333] whitespace-nowrap">
        {title}
      </span>
      <div className="bg-gray-200 rounded-full h-2.5 w-[75%] hidden md:block">
        <div
          className="bg-[#2563ab] h-2.5 rounded-full"
          style={{ width: `${rate}%` }}
        ></div>
      </div>
      <div className="md:hidden">{rate}%</div>
    </li>
  );
}

Skill.displayName = "Skill";
