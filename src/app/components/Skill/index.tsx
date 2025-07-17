interface SkillProps {
  title: string;
  rate: number;
}

export function Skill({ title, rate }: SkillProps) {
  return (
    <li className="flex flex-col gap-y-1">
      <span className="skill-name">{title}</span>
      <div className="skill-bar bg-gray-200 rounded-full h-2.5">
        <div
          className="skill-level bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${rate}%` }}
        ></div>
      </div>
    </li>
  );
}

Skill.displayName = "Skill";
