import { Experience as ExperienceType } from "@/utils/types/experience";

export function Experience({
  title,
  company,
  date,
  description,
}: Omit<ExperienceType, "id">) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700">{company}</p>
      <p className="text-sm text-gray-600 mb-1">{date}</p>
      <p className="mb-1 list-none">{description}</p>
    </div>
  );
}

Experience.displayName = "Experience";
